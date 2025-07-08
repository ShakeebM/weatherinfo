import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loadingContainer: {
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 16,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffe6e6',
    borderRadius: 15,
    margin: 16,
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    textAlign: 'center',
  },
  placeholderContainer: {
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
    margin: 16,
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  mainWeather: {
    alignItems: 'center',
    marginBottom: 30,
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  detailItem: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default styles;