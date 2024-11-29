/* Toggle-Menü */

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* Karussel-Funktionalität */

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

let autoSlideInterval = setInterval(nextSlide, 5000);

document.querySelectorAll(".carousel-control").forEach((control) => {
  control.addEventListener("click", () => {
    clearInterval(autoSlideInterval); 
    autoSlideInterval = setInterval(nextSlide, 5000);
  });
});

/* API-Key */

const apiKey = "bb21e1158fbe5208c30508c740a4fc5e";
const weatherContainer = document.getElementById("weather-container");

async function fetchWeatherData(city) {
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.current) {
      const weatherDetails = data.current;

      const weatherHTML = `
        <div class="weather-details">
          <div class="temperature">
            ${weatherDetails.temperature}°C
          </div>
          <div class="location">
            ${data.location.name}, ${data.location.country}
          </div>
        </div>
        <p>Wetter: ${weatherDetails.weather_descriptions[0]}</p>
        <p>Gefühlte Temperatur: ${weatherDetails.feelslike}°C</p>
        <p>Luftfeuchtigkeit: ${weatherDetails.humidity}%</p>
        <p>Wind: ${weatherDetails.wind_speed} km/h</p>
      `;

      weatherContainer.innerHTML = weatherHTML;
    } else {
      weatherContainer.innerHTML = "<p>Wetterdaten konnten nicht geladen werden.</p>";
    }
  } catch (error) {
    console.error("Fehler beim Abrufen der Wetterdaten:", error);
    weatherContainer.innerHTML = "<p>Fehler beim Laden der Wetterdaten.</p>";
  }
}

fetchWeatherData("Heilbronn");





/* Scroll-to-Top Button */

const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block"; 
  } else {
    scrollToTopBtn.style.display = "none"; 
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
});

/* Cookie-Banner */

window.onload = function() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptButton = document.getElementById('accept-cookies');
  const declineButton = document.getElementById('decline-cookies');

  cookieBanner.style.display = 'block';

  acceptButton.addEventListener('click', function() {
    cookieBanner.style.display = 'none';
  });

  declineButton.addEventListener('click', function() {
    cookieBanner.style.display = 'none';
  });
};








