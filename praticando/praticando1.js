const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {

    cards.forEach(c => c.classList.remove("active"));

    card.classList.add("active");
  });
});

const bar = document.getElementById("barChart");

new Chart(bar, {
  type: "bar",

  data: {
    labels: ["JAN", "FEB", "MAR", "APR"],

    datasets: [
      {
        label: "2020",
        data: [30, 40, 25, 50],

        backgroundColor: "#0f3d6d"
      },

      {
        label: "2019",
        data: [20, 25, 18, 35],

        backgroundColor: "#f59e0b"
      }
    ]
  }
});

const donut = document.getElementById("donutChart");

new Chart(donut, {
  type: "doughnut",

  data: {
    labels: ["Concluído", "Restante"],

    datasets: [{
      data: [45, 55],

      backgroundColor: [
        "#f59e0b",
        "#0f3d6d"
      ]
    }]
  }
});

const line = document.getElementById("lineChart");

new Chart(line, {
  type: "line",

  data: {
    labels: ["JAN", "FEB", "MAR"],

    datasets: [{
      data: [10, 30, 15],

      borderColor: "#f59e0b",

      fill: true,

      backgroundColor: "rgba(245,158,11,0.3)"
    }]
  }
});