import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBarApp = (props) => {
  const [search, setSearch] = useState('');

  const searchChanges = (search) => {
    setSearch(search);
  };

  return (
    <>
      <SearchBar
        placeholder="Search Songs.."
        onChangeText={searchChanges}
        value={search}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        searchIcon={
          <Button
            color="#fff"
            buttonStyle={{ backgroundColor: 'transparent' }}
            icon={<Icon name="cloud-search-outline" size={30} color="#ddd" />}
            onPress={() => props.onPressSearch(search)}
          />
        }
        onSubmitEditing={() => props.onPressSearch(search)}
      />
    </>
  );
}
export default SearchBarApp;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#2E8B57'
  },
  inputContainerStyle: {
    backgroundColor: '#333333'
  },
  inputStyle: {
    color: '#fff'
  }
});
