import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon : {
    marginRight: 15,
    zIndex: 1,
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingRight: 50,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flex: 1,
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loadingIndicator: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  dropdown: {
    position: 'absolute',
    top: 55,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: 250,
  },
  cityList: {
    maxHeight: 250,
  },
  cityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  cityInfo: {
    flex: 1,
  },
  cityName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  stateName: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  coordinates: {
    alignItems: 'flex-end',
  },
  coordText: {
    fontSize: 12,
    color: '#999',
    fontFamily: 'monospace',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  errorText: {
    fontSize: 14,
    color: '#d32f2f',
    textAlign: 'center',
  },
});

export default styles;