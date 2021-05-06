import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import {getCatFact} from '../api'

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (props) => (
  <Icon {...props} name='heart' />
);

export default DetailsScreen = ({navigation, route}) => {
  const { cat: {
    breed, coat, country, origin
  } } = route.params
  const [isLoading, setLoading] = useState(true);
  const [fact, setFact] = useState('')

  useEffect( () => {
    getCatFact()
      .then((fact) => setFact(fact))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [])

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category='h3'>
        Cat Details😻 for this breed:
      </Text>
      <Text style={styles.text} category='h3'>
        {breed}
      </Text>
      <Text style={styles.text} category='s1'>
        coat: {coat}
      </Text>
      <Text style={styles.text} category='s1'>
        country: {country}
      </Text>
      <Text style={styles.text} category='s1'>
        origin: {origin}
      </Text>
      <Text style={styles.text} category='h4'>
        Random Fact
      </Text>
      { isLoading ? ( <Text category='s1'> 'loading' </Text> ) : (
        <Text style={styles.text} category='s1'>
          {fact}
        </Text>
      )}
      <Button style={styles.likeButton} accessoryLeft={HeartIcon}
        onPress={() => navigation.navigate('Metrics')}
      >
        meowtrics
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