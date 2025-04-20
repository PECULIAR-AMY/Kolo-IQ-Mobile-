import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchBarProps {
  placeholder?: string;
  placeholderTextColor?: string;
  onSearch: (searchTerm: string) => void;
  debounceTime?: number;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  iconColor?: string;
  showClear?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  placeholderTextColor = '#888',
  onSearch,
  debounceTime = 300,
  containerStyle,
  inputStyle,
  iconColor = '#888',
  showClear = true,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounce implementation using useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, debounceTime);

    return () => clearTimeout(timer);
  }, [searchTerm, debounceTime, onSearch]);

  const handleClear = useCallback(() => {
    setSearchTerm('');
    onSearch('');
  }, [onSearch]);

  const handleTextChange = useCallback(
    (text: string) => setSearchTerm(text),
    []
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <Ionicons
        name="search"
        size={20}
        color={iconColor}
        style={styles.searchIcon}
      />

      <TextInput
        value={searchTerm}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, inputStyle]}
        accessibilityLabel="Search input"
        testID="search-input"
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
      />

      {showClear && searchTerm.length > 0 && (
        <TouchableOpacity
          onPress={handleClear}
          accessibilityLabel="Clear search"
          testID="clear-button"
        >
          <Ionicons
            name="close-circle"
            size={20}
            color={iconColor}
            style={styles.clearIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 8,
    color: '#333',
  },
  searchIcon: {
    marginRight: 4,
  },
  clearIcon: {
    marginLeft: 8,
  },
});

export default SearchBar;