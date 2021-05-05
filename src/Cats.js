import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import { Divider, List, ListItem } from '@ui-kitten/components';
import getCats from "./api";

const RenderItem = ({ item, index }) => (
  <ListItem
    title={`${item.breed} ${index + 1}`}
    description={`${item.description} ${index + 1}`}
  />
);

const EmptyItem = ({ item, index }) => (
  <ListItem
    title={`Empty List`}
  />
);

const LoadingContent = (props) => (
  <View {...props}>
    <Text >
      Cats Meowing...
    </Text>
    <ActivityIndicator size='large'/>
  </View>
)

export default Cats = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getCats()
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View >
      {isLoading ? ( <LoadingContent style={styles.container} /> ) : (
        <List
          ListEmptyComponent={EmptyItem}
          style={styles.container}
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={RenderItem}
          keyExtractor={({ breed }, index) => breed}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 400,
    minWidth: 350,
    padding: 10,
    margin: 10
  },
});
