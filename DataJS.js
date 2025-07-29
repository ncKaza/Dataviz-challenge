// === Slideshow ===
let slideIndex = 0;
const slides = document.querySelectorAll("#slideshow img");

function showNextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 4000);

// === Chart.js - Données simulées ===
const years = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];

// Mortalité infantile (exemple)
const mortalityData = {
  'Fidji': [23, 21, 20, 19, 18, 17, 16, 15, 14],
  'Vanuatu': [35, 34, 33, 30, 28, 26, 24, 22, 20],
};

// Consultations prénatales (ANC)
const ancData = {
  'Fidji': [60, 63, 66, 68, 71, 74, 76, 78, 80],
  'Vanuatu': [45, 47, 50, 53, 56, 60, 64, 67, 70],
};

// Chart Mortalité
new Chart(document.getElementById("mortalityChart"), {
  type: "line",
  data: {
    labels: years,
    datasets: Object.keys(mortalityData).map(country => ({
      label: country,
      data: mortalityData[country],
      fill: false,
      borderColor: country === 'Fidji' ? "#d32f2f" : "#1976d2",
      tension: 0.3,
    }))
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Taux de mortalité infantile (2007-2015)"
      }
    }
  }
});

// Chart ANC
new Chart(document.getElementById("ancChart"), {
  type: "line",
  data: {
    labels: years,
    datasets: Object.keys(ancData).map(country => ({
      label: country,
      data: ancData[country],
      fill: false,
      borderColor: country === 'Fidji' ? "#388e3c" : "#fbc02d",
      tension: 0.3,
    }))
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Consultations prénatales (ANC)"
      }
    }
  }
});