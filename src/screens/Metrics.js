import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import Cats from '../Cats'
import {
  Button,
  Icon,
  Layout,
  Text,
 Input 
} from '@ui-kitten/components';
import NetworkLogger from 'react-native-network-logger';
import { getManufacturer, getDeviceName, getSystemName, getSystemVersion } from 'react-native-device-info';


/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (props) => (
  <Icon {...props} name='heart' />
);

export default MetricsScreen = ({navigation}) => {
  console.log('getSystemName', getSystemName(), getSystemVersion())
  getManufacturer();
  const [maker, setMaker] = useState('')

  useEffect(() => {
    async function fetchData() {
      const maker = await getManufacturer()
      setMaker(maker) 
    }
    fetchData();
  }, []);
  const OS = getSystemName()
  const OS_VERSION = getSystemVersion()
  const makeAndModel = `${maker}/${OS} ${OS_VERSION}`
  return (
    <>
      <Layout>
        <Text category='h1'>
          {makeAndModel}
        </Text>
      </Layout>
      <NetworkLogger />
    </>
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