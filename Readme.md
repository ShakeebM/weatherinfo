# Weather Info App

A React Native app to search cities and view current weather information using the OpenWeatherMap API.

## Features

- Autocomplete search for cities around the world
- Fetches and displays current weather data (temperature, humidity, wind, etc.)
- Shows weather icon and description
- Option to use current device location for weather info
- Clean, modern UI

## Tech Stack

- React Native
- Expo
- Redux Toolkit
- OpenWeatherMap API

## Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/shakeebM/weatherinfo.git
   cd weatherinfo
   ```

2. **Install dependencies:**
   ```sh
   yarn install
   ```
3. **Start the app:**
   ```sh
   yarn start
   ```
   or
   ```sh
   npx expo start
   ```

## Usage

- Search for a city using the autocomplete field.
- Select a city to view its weather.

## Project Structure

```
src/
  components/         # UI components
  redux/              # Redux slices, store, selectors
  screens/            # App screens (HomeScreen, etc.)
  utils/              # Constants and helpers
  services/           # API services
```

