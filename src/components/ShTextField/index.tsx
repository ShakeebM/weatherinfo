import { ActivityIndicator, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { City } from '../../redux/types';

import React, {  } from 'react';
import styles from './ShTextField.styles';
import IonIcons from '@expo/vector-icons/Ionicons';
import { useCitySearch } from '../../hooks/useCityList';

export type ShTextFieldProps = {
    onCitySelect : (city: City) => void;
}

function ShTextField({onCitySelect} : ShTextFieldProps) {

    // Filter cities based on the query
    const {clearSearch, filteredCities, searchQuery, setSearchQuery, loading} = useCitySearch();
    
    const placeholder = 'Search for a city...';

    const handleCitySelect = (city : City) => {
        setSearchQuery(city.name);
        onCitySelect(city);
        setTimeout(() => clearSearch(), 100); // Small delay to show selection
    };

    const renderCityItem = ({ item }) => (
        <TouchableOpacity
            style={styles.cityItem}
            onPress={() => handleCitySelect(item)}
        >
            <View style={styles.cityInfo}>
                <Text style={styles.cityName}>{item.name}</Text>
                <Text>{item.state && <Text style={styles.stateName}>{item.state}</Text>}
                    {item.country && <Text style={styles.stateName}>, {item.country}</Text>}
                </Text>
            </View>
            <View style={styles.coordinates}>
                <Text style={styles.coordText}>
                    {item.lat.toFixed(2)}, {item.lon.toFixed(2)}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const renderEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No cities found</Text>
            {loading && <ActivityIndicator size="small" color="#4A90E2" />}
        </View>
    );

   const showDropdown = searchQuery.trim().length >= 2 && 
    (filteredCities.length > 0 || loading);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <IonIcons name="search" size={20} color="#4A90E2" style={styles.icon}/>
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCorrect={false}
          autoCapitalize="words"
        />
        {loading && (
          <View style={styles.loadingIndicator}>
            <ActivityIndicator size="small" color="#4A90E2" />
          </View>
        )}
      </View>
      
      {showDropdown && (
        <View style={styles.dropdown}>
          <FlatList
            data={filteredCities}
            renderItem={renderCityItem}
            keyExtractor={(item, index) => item.name + index}
            style={styles.cityList}
            keyboardShouldPersistTaps="handled"
            ListEmptyComponent={renderEmptyComponent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );

}
export default ShTextField;