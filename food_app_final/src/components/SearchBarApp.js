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
        placeholder="Search Items.."
        onChangeText={searchChanges}
        value={search}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        searchIcon={
          <Button
            color="#000"
            buttonStyle={{ backgroundColor: 'transparent' }}
            icon={<Icon name="home-search-outline" size={30} color="#000" />}
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
    backgroundColor: '#EFEEEE',
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  inputContainerStyle: {
    backgroundColor: '#DCDCDC',
    borderRadius: 20 ,
    // textDecoration: none
  },
  inputStyle: {
    color: '#000'
  }
});
