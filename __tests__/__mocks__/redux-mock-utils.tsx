import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "../../src/redux/weatherSlice";
import { citiesSlice } from "../../src/redux/citiesSlice";
import { Provider } from "react-redux";
import { render } from '@testing-library/react-native';

  const createTestStore = (initialState = {}) => {
    return configureStore({
      reducer: {
        weather: weatherSlice.reducer,
        cities : citiesSlice.reducer
      },
    });
  };

export function renderWithRedux(
  component: React.ReactElement,
  { initialState = {} } = {}
) {
  const mockStore = createTestStore(initialState);
  function Wrapper({ children }) {
    return <Provider store={mockStore}>{children}</Provider>;
  }
  return {mockStore, ...render(component, { wrapper : Wrapper })};
}