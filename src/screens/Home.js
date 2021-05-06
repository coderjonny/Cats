import React from 'react';
import { StyleSheet } from 'react-native';
import Cats from '../Cats'
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (props) => (
  <Icon {...props} name='heart' />
);

export default HomeScreen = ({navigation}) => {
  const onPress = () => navigation.navigate('Metrics')

  const clearCats = async () => {
    // to test clearing AsyncStorage
    try {
      await AsyncStorage.removeItem('saved_cats');
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category='h1'> Cats 😻 </Text>
      <Text style={styles.text} category='s1'>
        Check out different breeds of cats
      </Text>
      <Cats />
      <Button
        style={styles.likeButton}
        accessoryLeft={HeartIcon}
        onPress={onPress}
      >
        meowtrics
    </Button>
      <Button
        style={styles.likeButton}
        onPress={() => clearCats()}
      >
        clear saved cats
    </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});