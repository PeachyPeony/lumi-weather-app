# Lumi Weather App
Lumi is a responsive weather application created as part of a web development bootcamp project. It uses the OpenWeather API to display current weather information and a four-day forecast for a searched city. 

## Features 
- Search for weather by city name
- Display the current temperature
- Display the current weather description and icon
- Display sunrise and sunset times
- Display a four-day weather forecast
- Show daily high and low temperatures
- Responsive design for mobile, tablet and desktop screens
- Error handling for empty and invalid searches

## Technologies Used 
- HTML5
- CSS3
- JavaScript
- OpenWeather API
- Cloudfare Pages 

## How It Works 
The user enters a city name into the search field. JavaScript sends requests to the OpenWeather API using `fetch()`. 

The application then displays: 
- The city name
- Current temperature
- Weather description
- Weather icon
- Sunrise and sunset times
- A four-day forecast with weather icons and high/low temperatures

## Responsive design
Lumi is designed to work across diffrent screen sizes, from approximately 320px to 1600px.

The layout has been tested on: 
- Mobile: 320px
- Tablet: 900px
- Desktop: 1600px

## API 
Weather data is provided by the [OpenWeather API](https://openweathermap.org/api).
The API key is stored locally in `config.js` and is exluded from the Git repository using `.gitignore`. 

## Deployment
The live application is deployed using Cloudflare Pages.
Live site: https://lumi-weather-app.pages.dev/

## What I Learned 
Through this project, I practiced: 
- Working with APIs
- Using JavaScript `fetch()`
- Handling asynchronous data
- Working with JSON data
- Updating HTML with JavaScript
- Handling errors and invalid user input
- Creating responsive layouts with CSS

## Acknowledgements
This project was created following a project brief and design provided through the web development bootcamp course material. The implementation, functionality, and styling were developed as part of my own learning process.

## Future Improvements
Possible future improvements could include: 
- More detailed weather information
- Additional forecast days
- Improved accessibility
- More weather-based visual changes
- Additional responsive design refinements