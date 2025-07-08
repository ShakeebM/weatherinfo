import { useEffect, useMemo, useState } from "react";
// import cities from "../redux/city.list";
import { City } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { citiesSelector } from "../redux/selectors";
import { fetchCities } from "../redux/citiesSlice";
import { AppDispatch } from "../redux/store";

export const useCitySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {list : filteredCities, loading} = useSelector(citiesSelector);
  const dispatch = useDispatch<AppDispatch>();

useEffect(() => {
    if (searchQuery.trim().length < 2) {
      return;
    }
    dispatch(fetchCities(searchQuery));
  }, [searchQuery]);

  const clearSearch = () => setSearchQuery('');

  return {
    searchQuery,
    setSearchQuery,
    filteredCities,
    loading,
    clearSearch,
  };
};
