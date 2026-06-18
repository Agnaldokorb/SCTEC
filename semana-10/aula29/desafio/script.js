const app = document.createElement("main");
app.id = "app";
document.body.innerHTML = "";
document.body.appendChild(app);

const state = {
  step: 1,
  file: null,
  fileUrl: "",
  colors: ["#bdbaba", "#bdbaba", "#bdbaba", "#bdbaba"],
};

function getStepperHtml(step) {
  let dots = "";

  for (let i = 1; i <= 5; i += 1) {
    const statusClass =
      i < step ? "dot done" : i === step ? "dot active" : "dot";
    dots += `<span class="${statusClass}" aria-hidden="true"></span>`;
  }

  return `<div class="stepper">${dots}</div>`;
}

function getPaletteHtml() {
  return state.colors
    .map((color, index) => {
      return `
				<label class="color-item" title="Cor ${index + 1}">
					<input type="color" data-color-index="${index}" value="${color}">
				</label>
			`;
    })
    .join("");
}

function getColorPreviewDotsHtml() {
  return state.colors
    .map(
      (color) =>
        `<span class="preview-dot" style="background:${color}"></span>`,
    )
    .join("");
}

function getCurrentScreenHtml() {
  if (state.step === 1) {
    return `
			${getStepperHtml(1)}
			<p class="welcome-text">Bem-vindo, iniciar a adição de colorimetria</p>
			<button class="action" data-action="next">Avançar</button>
		`;
  }

  if (state.step === 2) {
    const fileName = state.file ? state.file.name : "Upload";
    return `
			${getStepperHtml(2)}
			<div class="upload-block">
				<label for="input-file" class="upload-label">${fileName}</label>
				<input id="input-file" type="file" accept="image/*">
				<p class="file-name">${state.file ? state.file.name : "nenhum arquivo selecionado"}</p>
			</div>
			<button class="action" data-action="next" ${state.file ? "" : "disabled"}>Avançar</button>
		`;
  }

  if (state.step === 3) {
    return `
			${getStepperHtml(3)}
			<div class="palette">${getPaletteHtml()}</div>
			
			<button class="action" data-action="next" ${state.colors.some((color) => color !== "#bdbaba") ? "" : "disabled"}>Avançar</button>
		`;
  }

  if (state.step === 4) {
    return `
		${getStepperHtml(4)}
		<div class="confirm-wrap">
			<p class="confirm-row"><strong>foto:</strong> ${state.file ? state.file.name : "sem arquivo"}</p>
			${state.fileUrl ? `<img class="preview-image" src="${state.fileUrl}" alt="Foto enviada">` : ""}
			<p class="confirm-row"><strong>cores:</strong></p>
			<div class="preview-dots">${getColorPreviewDotsHtml()}</div>
		</div>
		<div class="actions">
            <button class="action" data-action="next">Confirmar</button>
        </div>
	`;
  }
  return `
    ${getStepperHtml(5)}
		<div class="confirm-wrap">
			${state.fileUrl ? `<img class="preview-image" src="${state.fileUrl}" alt="Foto enviada">` : ""}
			<div class="preview-dots">${getColorPreviewDotsHtml()}</div>
		</div>
		<div class="actions">
            <button class="action" data-action="new">Novo</button>
        </div>
	`;
}

function render() {
  app.innerHTML = `<section class="screen">${getCurrentScreenHtml()}</section>`;
}

function goNext() {
  state.step = Math.min(5, state.step + 1);
  render();
}

app.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");

  if (!actionButton) {
    return;
  }

  const { action } = actionButton.dataset;

  if (action === "next") {
    goNext();
    return;
  }   

  if (action === "new") {
    state.file = null;
    state.fileUrl = "";
    state.colors = ["#bdbaba", "#bdbaba", "#bdbaba", "#bdbaba"];
    state.step = 1;
    render();
  }
});

app.addEventListener("change", (event) => {
  const colorInput = event.target.closest("input[data-color-index]");

  if (colorInput) {
    const colorIndex = Number(colorInput.dataset.colorIndex);
    state.colors[colorIndex] = colorInput.value;
    render();
    return;
  }

  if (event.target.id === "input-file") {
    const selectedFile = event.target.files && event.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (state.fileUrl) {
      URL.revokeObjectURL(state.fileUrl);
    }

    state.file = selectedFile;
    state.fileUrl = URL.createObjectURL(selectedFile);
    render();
  }
});

render();
