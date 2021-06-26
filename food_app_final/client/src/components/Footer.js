import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';


const MusicRoute = () => <Text>Recents</Text>;

const AlbumsRoute = () =>  <Text>Recents</Text>;

const RecentsRoute = () => <Text>Recents</Text>;


const Footer = (props) => {
  const navigation = useNavigation();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'music', title: 'Music', icon: 'bell' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      music: MusicRoute,
      albums: AlbumsRoute,
      recents: RecentsRoute,
    });

    return (
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    );
}

export default Footer;