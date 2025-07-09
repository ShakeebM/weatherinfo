import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherComponent from '../../src/components/weatherComponent';
import { WeatherData } from '../../src/redux/types';

describe('WeatherComponent', () => {
  it('renders city name and temperature', () => {
    const mockWeather : WeatherData = {
        dt: 1633072800,
        main: {
            temp: 30,
            feels_like: 28,
            temp_min: 25,
            temp_max: 32,
            pressure: 1012,
            humidity: 70,
        },
        weather: [
            {
                id: 801,
                main: 'Clouds',
                description: 'few clouds',
                icon: '02d',
            },
        ],
        wind: {
            speed: 3.5,
            deg: 200,
        },
        visibility: 10000,
        sys: {
            country: 'IN',
            sunrise: 1633058400,
            sunset: 1633101600,
        },
        timezone: 19800,
        id: 1275339,
        name: 'Mumbai',
        clouds: {
            all: 20,
        },
        coord: {
            lon: 0,
            lat: 0
        },
        base: 'stations',
        cod: 200,
    };
    

    const mockCity = {
      name: 'Mumbai',
      local_names: { en: 'Mumbai' },
      lat: 19.076,
      lon: 72.8777,
      country: 'IN',
      state: 'Maharashtra',
    };

    const { getByText } = render(<WeatherComponent weatherData={mockWeather} city={mockCity} />);
    expect(getByText('Mumbai')).toBeTruthy();
    expect(getByText(/30/)).toBeTruthy();
  });
});