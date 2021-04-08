import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import Home from './commponents/Home';
import Status from './commponents/Status';

export default function App() {
  const [page, setPage] = useState('Home');

  const goToPage = (newPage) => {
    if (newPage != page)
      setPage(newPage);
  }

  return (
    <ImageBackground
      style={styles.background}
      source={{ uri: "https://main.knesset.gov.il/mk/elections/PublishingImages/ElectionsSystem.png" }}
    >
      <View style={styles.container}>
        {
          page == 'Home'
            ?
            <Home page={page} goToPage={goToPage} />
            :
            <Status page={page} goToPage={goToPage} />
        }
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    paddingTop: 60
  }
});
