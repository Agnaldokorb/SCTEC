/* ═══════════════════════════════════════════════
           THREE.JS – NEURAL NETWORK PARTICLE BACKGROUND
           ═══════════════════════════════════════════════ */
(function initThree() {
  const canvas = document.getElementById("bg");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    800,
  );
  camera.position.z = 90;

  /* ── Nodes ── */
  const COUNT = 140;
  const nodePositions = [];
  const nodeVelocities = [];
  const nodeGroup = new THREE.Group();
  const sphereGeo = new THREE.SphereGeometry(0.45, 6, 6);

  for (let i = 0; i < COUNT; i++) {
    const p = new THREE.Vector3(
      (Math.random() - 0.5) * 180,
      (Math.random() - 0.5) * 110,
      (Math.random() - 0.5) * 60,
    );
    nodePositions.push(p);
    nodeVelocities.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 0.06,
        (Math.random() - 0.5) * 0.06,
        (Math.random() - 0.5) * 0.025,
      ),
    );
    const mat = new THREE.MeshBasicMaterial({
      color: 0x6ee7f,
      transparent: true,
      opacity: 0.55,
    });
    const mesh = new THREE.Mesh(sphereGeo, mat);
    mesh.position.copy(p);
    nodeGroup.add(mesh);
  }
  scene.add(nodeGroup);

  /* ── Edges ── */
  const MAX_EDGES = 450;
  const edgePosBuf = new Float32Array(MAX_EDGES * 6);
  const edgeColBuf = new Float32Array(MAX_EDGES * 6);
  const edgeGeo = new THREE.BufferGeometry();
  edgeGeo.setAttribute("position", new THREE.BufferAttribute(edgePosBuf, 3));
  edgeGeo.setAttribute("color", new THREE.BufferAttribute(edgeColBuf, 3));
  const edgeMesh = new THREE.LineSegments(
    edgeGeo,
    new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
    }),
  );
  scene.add(edgeMesh);

  /* ── Gyro influence (updated by sensor section) ── */
  let gyroInfluence = { beta: 0, gamma: 0 };
  window._updateGyroInfluence = (beta, gamma) => {
    gyroInfluence = { beta, gamma };
  };

  /* ── Animate ── */
  const clock = new THREE.Clock();
  (function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    /* Move nodes */
    for (let i = 0; i < COUNT; i++) {
      const p = nodePositions[i];
      const v = nodeVelocities[i];
      p.addScaledVector(v, 1);
      if (Math.abs(p.x) > 95) v.x *= -1;
      if (Math.abs(p.y) > 60) v.y *= -1;
      if (Math.abs(p.z) > 35) v.z *= -1;
      nodeGroup.children[i].position.copy(p);
    }

    /* Rebuild edges */
    const CONNECT_DIST = 32;
    let ec = 0;
    outer: for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        if (ec >= MAX_EDGES) break outer;
        const d = nodePositions[i].distanceTo(nodePositions[j]);
        if (d < CONNECT_DIST) {
          const f = 1 - d / CONNECT_DIST;
          const b = ec * 6;
          edgePosBuf[b] = nodePositions[i].x;
          edgePosBuf[b + 1] = nodePositions[i].y;
          edgePosBuf[b + 2] = nodePositions[i].z;
          edgePosBuf[b + 3] = nodePositions[j].x;
          edgePosBuf[b + 4] = nodePositions[j].y;
          edgePosBuf[b + 5] = nodePositions[j].z;
          // Cyan → Purple gradient per edge alpha
          edgeColBuf[b] = 0.43 * f;
          edgeColBuf[b + 1] = 0.91 * f;
          edgeColBuf[b + 2] = 0.97 * f;
          edgeColBuf[b + 3] = 0.65 * f;
          edgeColBuf[b + 4] = 0.55 * f;
          edgeColBuf[b + 5] = 0.98 * f;
          ec++;
        }
      }
    }
    edgeGeo.setDrawRange(0, ec * 2);
    edgeGeo.attributes.position.needsUpdate = true;
    edgeGeo.attributes.color.needsUpdate = true;

    /* Gentle camera drift + gyro tilt */
    const targetRX =
      (gyroInfluence.beta / 90) * 0.15 + Math.sin(t * 0.09) * 0.025;
    const targetRY =
      (gyroInfluence.gamma / 90) * 0.15 + Math.cos(t * 0.11) * 0.025;
    camera.rotation.x += (targetRX - camera.rotation.x) * 0.04;
    camera.rotation.y += (targetRY - camera.rotation.y) * 0.04;

    renderer.render(scene, camera);
  })();

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
})();

/* ═══════════════════════════════════════════════
           GSAP – ENTRANCE ANIMATIONS
           ═══════════════════════════════════════════════ */
gsap.to(".header", { opacity: 1, duration: 1, delay: 0.2, ease: "power2.out" });
gsap.to(".card", {
  opacity: 1,
  y: 0,
  duration: 0.85,
  stagger: 0.18,
  delay: 0.5,
  ease: "power3.out",
});

/* ═══════════════════════════════════════════════
           GEOLOCATION
           ═══════════════════════════════════════════════ */
(function initGeo() {
  if (!("geolocation" in navigator)) {
    document.getElementById("lat-val").textContent = "Não suportado";
    return;
  }
  navigator.geolocation.watchPosition(
    (pos) => {
      const c = pos.coords;
      document.getElementById("lat-val").textContent =
        c.latitude.toFixed(6) + "°";
      document.getElementById("lon-val").textContent =
        c.longitude.toFixed(6) + "°";
      document.getElementById("acc-val").textContent =
        c.accuracy.toFixed(1) + " m";
      document.getElementById("spd-val").textContent =
        c.speed !== null ? (c.speed * 3.6).toFixed(1) + " km/h" : "0 km/h";
      /* Flash update */
      gsap.fromTo(
        "#lat-val, #lon-val, #acc-val, #spd-val",
        { color: "#fff" },
        { color: "var(--pink)", duration: 0.6, ease: "power1.out" },
      );
    },
    () => {
      document.getElementById("lat-val").textContent = "Acesso negado";
      document.getElementById("lon-val").textContent = "—";
    },
    { enableHighAccuracy: true },
  );
})();

/* ═══════════════════════════════════════════════
           GYROSCOPE / DEVICE ORIENTATION
           ═══════════════════════════════════════════════ */
(function initGyro() {
  const btn = document.getElementById("gyro-btn");
  const dot = document.getElementById("gyro-dot");
  const size = 90; /* ball diameter in px */

  function onOrientation(e) {
    const alpha = e.alpha !== null ? e.alpha.toFixed(1) + "°" : "—";
    const beta = e.beta !== null ? e.beta.toFixed(1) + "°" : "—";
    const gamma = e.gamma !== null ? e.gamma.toFixed(1) + "°" : "—";
    document.getElementById("alpha-val").textContent = alpha;
    document.getElementById("beta-val").textContent = beta;
    document.getElementById("gamma-val").textContent = gamma;

    if (e.beta !== null && e.gamma !== null) {
      /* Map beta [-90,90] and gamma [-45,45] → dot position inside circle */
      const px = Math.max(
        7,
        Math.min(size - 7, size / 2 + (e.gamma / 45) * (size / 2 - 7)),
      );
      const py = Math.max(
        7,
        Math.min(size - 7, size / 2 + (e.beta / 90) * (size / 2 - 7)),
      );
      dot.style.left = px + "px";
      dot.style.top = py + "px";
      window._updateGyroInfluence(e.beta, e.gamma);
    }
  }

  function startGyro() {
    window.addEventListener("deviceorientation", onOrientation, true);
    btn.textContent = "Giroscópio Ativo ✓";
    btn.disabled = true;
  }

  btn.addEventListener("click", () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      /* iOS 13+ requires explicit permission */
      DeviceOrientationEvent.requestPermission()
        .then((state) => {
          if (state === "granted") startGyro();
        })
        .catch(console.error);
    } else {
      startGyro();
    }
  });
})();

/* ═══════════════════════════════════════════════
           MICROPHONE + WEB AUDIO VISUALIZATION
           ═══════════════════════════════════════════════ */
(function initAudio() {
  const btn = document.getElementById("mic-btn");
  const canvas = document.getElementById("audio-viz");
  const ctx2d = canvas.getContext("2d");
  let analyser, audioCtx;

  /* Map frequency → nearest musical note */
  function freqToNote(freq) {
    if (freq <= 0) return "—";
    const notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
    const semitones = Math.round(12 * Math.log2(freq / 440)) + 69;
    if (semitones < 0 || semitones > 127) return "—";
    return notes[semitones % 12] + Math.floor(semitones / 12 - 1);
  }

  function draw() {
    requestAnimationFrame(draw);
    if (!analyser) return;

    const W = (canvas.width = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);
    const bufLen = analyser.frequencyBinCount;
    const data = new Uint8Array(bufLen);
    analyser.getByteFrequencyData(data);

    ctx2d.clearRect(0, 0, W, H);

    /* Frequency bars */
    const barW = Math.max(2, (W / bufLen) * 2.2);
    let x = 0;
    for (let i = 0; i < bufLen; i++) {
      const barH = (data[i] / 255) * H;
      const hue = 195 + (i / bufLen) * 120; /* cyan → purple */
      ctx2d.fillStyle = `hsla(${hue},75%,58%,0.85)`;
      ctx2d.fillRect(x, H - barH, barW - 1, barH);
      x += barW;
      if (x > W) break;
    }

    /* RMS volume */
    let sum = 0;
    for (let i = 0; i < bufLen; i++) sum += data[i] * data[i];
    const rms = Math.sqrt(sum / bufLen);
    document.getElementById("vol-val").textContent = rms.toFixed(1) + " / 255";

    /* Dominant frequency */
    let peakIdx = 0,
      peakAmp = 0;
    for (let i = 0; i < bufLen; i++) {
      if (data[i] > peakAmp) {
        peakAmp = data[i];
        peakIdx = i;
      }
    }
    const freqHz = (peakIdx / bufLen) * (audioCtx.sampleRate / 2);
    document.getElementById("freq-val").textContent = freqHz.toFixed(0) + " Hz";
    document.getElementById("note-val").textContent = freqToNote(freqHz);
  }

  btn.addEventListener("click", async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      audioCtx.createMediaStreamSource(stream).connect(analyser);
      btn.textContent = "Microfone Ativo ✓";
      btn.disabled = true;
      draw();
    } catch {
      btn.textContent = "Acesso Negado";
    }
  });
})();

/* ═══════════════════════════════════════════════
           CAMERA + TENSORFLOW.JS COCO-SSD
           ═══════════════════════════════════════════════ */
(function initCamera() {
  const video = document.getElementById("video");
  const overlay = document.getElementById("overlay");
  const ctx = overlay.getContext("2d");
  const spinner = document.getElementById("spinner");
  const statusText = document.getElementById("status-text");
  const detCount = document.getElementById("det-count");
  const camPulse = document.getElementById("cam-pulse");
  const objectsDiv = document.getElementById("objects");

  let model = null;
  let prevClasses = new Set();
  let running = false;

  async function setupCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 640 },
          height: { ideal: 480 },
        },
      });
      video.srcObject = stream;
      return new Promise((resolve) => {
        video.onloadedmetadata = () => {
          overlay.width = video.videoWidth;
          overlay.height = video.videoHeight;
          resolve(true);
        };
      });
    } catch {
      statusText.textContent = "Câmera não disponível ou acesso negado.";
      spinner.classList.add("hidden");
      return false;
    }
  }

  async function loadModel() {
    statusText.textContent = "Carregando modelo COCO-SSD...";
    model = await cocoSsd.load({ base: "lite_mobilenet_v2" });
    spinner.classList.add("hidden");
    statusText.textContent = "Detectando objetos...";
    detCount.style.display = "inline";
    camPulse.classList.add("active");
  }

  async function detectLoop() {
    if (!running) return;
    if (video.readyState >= 2 && model) {
      const predictions = await model.detect(video);

      /* Resize overlay to match video display */
      overlay.width = video.videoWidth;
      overlay.height = video.videoHeight;
      ctx.clearRect(0, 0, overlay.width, overlay.height);

      const currentClasses = new Set();
      predictions.forEach((p) => {
        currentClasses.add(p.class);
        const [x, y, w, h] = p.bbox;
        const pct = (p.score * 100).toFixed(0);

        /* Bounding box */
        ctx.strokeStyle = "#6ee7f7";
        ctx.lineWidth = 2;
        ctx.shadowColor = "#6ee7f7";
        ctx.shadowBlur = 6;
        ctx.strokeRect(x, y, w, h);
        ctx.shadowBlur = 0;

        /* Label background */
        const label = `${p.class}  ${pct}%`;
        ctx.font = "bold 13px system-ui";
        const tw = ctx.measureText(label).width;
        ctx.fillStyle = "rgba(5,5,16,0.78)";
        ctx.fillRect(x, y - 22, tw + 10, 22);

        /* Label text */
        ctx.fillStyle = "#6ee7f7";
        ctx.fillText(label, x + 5, y - 6);
      });

      /* Update detection count */
      detCount.textContent = predictions.length
        ? `· ${predictions.length} objeto${predictions.length > 1 ? "s" : ""}`
        : "";

      /* Update tags only when the set changes */
      const changed =
        currentClasses.size !== prevClasses.size ||
        [...currentClasses].some((c) => !prevClasses.has(c));

      if (changed) {
        objectsDiv.innerHTML = "";
        currentClasses.forEach((cls) => {
          const tag = document.createElement("span");
          tag.className = "obj-tag";
          tag.textContent = cls;
          objectsDiv.appendChild(tag);
          gsap.from(tag, {
            scale: 0,
            opacity: 0,
            duration: 0.35,
            ease: "back.out(1.7)",
          });
        });
        prevClasses = currentClasses;
      }
    }
    requestAnimationFrame(detectLoop);
  }

  (async () => {
    const camOk = await setupCamera();
    if (!camOk) return;
    await loadModel();
    running = true;
    detectLoop();
  })();
})();
