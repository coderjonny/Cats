import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import { Divider, List, ListItem } from '@ui-kitten/components';
import getCats from "./api";
import { useNavigation } from '@react-navigation/native';

const EmptyItem = ({ item, index }) => (
  <ListItem
    title={`Empty List`}
  />
);

const LoadingContent = (props) => (
  <View {...props}>
    <Text >
      Cats Meowing  ...
    </Text>
  </View>
)


export default Cats = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(Infinity);
  const navigation = useNavigation()
  const totalCats = Array.isArray(data) ? data.length : 0;

  const RenderItem = ({ item, index }) => {
    const cat = item;
    const onPress = () => {
      navigation.navigate('Details', {cat})
    }
    return (
      <ListItem
        style={styles.listItem}
        title={`${cat.breed} ${index + 1}`}
        description={`${cat.breed} ${index + 1}`}
        onPress={onPress}
      />
    )
  }

  useEffect(() => loadInitial(), []);

  const loadInitial = () => {
    getCats(page)
      .then((json) => {
        setData(json.data)
        setPage(json.current_page)
        setLastPage(json.last_page)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const loadResults = () => {
    let nextPage = page <= lastPage ? page + 1 : page

    if (nextPage > lastPage || isLoading) return;

    setLoading(true);

    getCats(nextPage)
      .then((json) => {
        setData(data.length > 0 ? [...data, ...json.data] : json.data)
        setPage(json.current_page)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <View >
        <List
          ListHeaderComponent={
            <View>
              <Text style={styles.title}>Displaying {totalCats} Cats</Text>
            </View>
          }
          ListFooterComponent={
      <View >
        {isLoading &&
          <>
            <ActivityIndicator size='large' />
            <Text style={styles.footerText}>Loading More...</Text>
          </>
        }
      </View>

          }
          ListEmptyComponent={EmptyItem}
          style={styles.container}
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={ RenderItem }
          onEndReached={ loadResults }
          getItemLayout={(data, index) => (
            {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
          )}
          keyExtractor={({ breed }, index) => breed + "${index}"}
        />
    </View>
  );
};

const ITEM_HEIGHT = 50;
const styles = StyleSheet.create({
  container: {
    maxHeight: 400,
    minWidth: 350,
    padding: 10,
    margin: 10
  },
  listItem: {
    height: 50
  }
});
