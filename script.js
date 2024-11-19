const apiUrl = "https://restcountries.com/v3.1";
const searchInput = document.getElementById("search-input");
const continentDropdown = document.getElementById("continent-dropdown");
const resultsContainer = document.getElementById("results-container");
const loadingIndicator = document.getElementById("loading-indicator");

const continentMap = {
  "Asia": "Asia",
  "Africa": "Africa",
  "Europe": "Europe",
  "North America": "Americas",
  "South America": "Americas",
  "Australia": "Oceania",
  "Antarctica": "Antarctica",
};

const fetchAndDisplay = async () => {
  const continent = continentMap[continentDropdown.value];
  const query = searchInput.value.toLowerCase().trim();
  if (!continent) return (resultsContainer.innerHTML = "");

  loadingIndicator.style.display = "block";
  try {
    const response = await fetch(`${apiUrl}/region/${continent}`);
    const countries = await response.json();
    const filtered = query
      ? countries.filter((c) => c.name.common.toLowerCase().includes(query))
      : countries;

    resultsContainer.innerHTML = filtered.length
      ? filtered
          .map(
            (c) => `
          <div class="country-card">
            <img src="${c.flags.svg}" alt="Flag of ${c.name.common}">
            <h2>${c.name.common}</h2>
            <p>Capital: ${c.capital?.[0] || "N/A"}</p>
            <p>Currency: ${
              c.currencies ? Object.values(c.currencies)[0].name : "N/A"
            }</p>
            <p>Language: ${
              c.languages ? Object.values(c.languages).join(", ") : "N/A"
            }</p>
            <p>Area: ${c.area.toLocaleString()} km²</p>
          </div>`
          )
          .join("")
      : "<p>No countries found.</p>";
  } catch {
    resultsContainer.innerHTML = "<p>Error loading data.</p>";
  }
  loadingIndicator.style.display = "none";
};

continentDropdown.addEventListener("change", fetchAndDisplay);
searchInput.addEventListener("input", fetchAndDisplay);