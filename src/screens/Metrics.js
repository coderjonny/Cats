import React from 'react';
import { StyleSheet } from 'react-native';
import Cats from '../Cats'
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import NetworkLogger from 'react-native-network-logger';


/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (props) => (
  <Icon {...props} name='heart' />
);

export default MetricsScreen = ({navigation}) => {
  return (
    <NetworkLogger />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});