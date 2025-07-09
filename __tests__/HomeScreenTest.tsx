import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';
import { renderWithRedux } from './__mocks__/redux-mock-utils';

const initialState = {
    weather: {
      weatherReport: {
        city: 'Mumbai',
        country: 'IN',
        temperature: 30,
        weather: [{ main: 'Clear', description: 'clear sky', icon: '01d' }],
        humidity: 60,
        windSpeed: 5,
        windDirection: 90,
        pressure: 1012,
        visibility: 10,
        sunrise: new Date(),
        sunset: new Date(),
        timestamp: new Date(),
        feelsLike: 32,
      },
      selectedCity: { name: 'Mumbai', country: 'IN' },
    },
  };

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('HomeScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders without crashing', () => {

    // beforeEach(() => {
    //   (useDispatch as unknown as jest.Mock).mockReturnValue(jest.fn());
    // });

    const { getByText } = renderWithRedux(
      <HomeScreen />,
      { initialState }
    );
    expect(getByText('Mumbai')).toBeTruthy();
  });

  it('shows weather data if available', () => {
    const { getByText } = renderWithRedux(
      <HomeScreen />,
      { initialState }
    );
    expect(getByText(/30/)).toBeTruthy();
    expect(getByText(/Clear/)).toBeTruthy();
  });
});