# Information of countries Search App
## Project Description
This "Countries Search App" allows users to search for countries by name and filter them by continent. It provides details about each country, such as its capital, currency, languages, area, and flag. The app uses a REST API (https://restcountries.com) to retrieve country data in real-time. The user interface includes a search bar for typing country names and a dropdown menu for selecting a continent. As users interact with the app, they can view country details dynamically, with a loading indicator while the data is being fetched.
## Must-Have Features
- Search Functionality: Users can type a country's name into the search bar, and the app will filter results based on the input.
- Continent Filter: Users can filter the list of countries by selecting a continent from a dropdown menu (Asia, Africa, Europe, North America, South America, Australia, Antarctica).
- Country Information: For each country, the app displays the flag, capital, currency, languages spoken, and area size.
- Responsive Design: The layout adapts to various screen sizes using CSS Grid to display country cards in a responsive, user-friendly way.
- Loading Indicator: A loading message is shown when the app is fetching data.
- Error Handling: If there is an error in fetching country data, the app displays an error message.
## Tech Stack
- HTML: Structure and layout of the webpage.
- CSS: Styling for the webpage, ensuring a clean and responsive design.
- JavaScript: Handles fetching country data from the API and managing the dynamic UI.
- API: Uses the RestCountries API to retrieve information about countries.
- Responsive Design: Utilizes modern CSS techniques like grid-template-columns and @media queries to ensure the app is mobile-friendly.
## How to Use
1. Select a Continent: Use the dropdown to select a continent, which will narrow down the countries to that region.
2. Enter a Country Name: Start typing in the search bar, and the app will filter countries by name as you type. 
3. Display country information such as flag, capital, currency, languages, and area.
4. Explore: Continue searching and selecting different continents to discover information about countries from all over the world.
5. Loading and Error States: While the data is being fetched, a "Loading..." message will be shown. If there's an issue, an error message will appear. 