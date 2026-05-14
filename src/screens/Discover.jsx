import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Search } from 'lucide-react-native';

import { colors } from '../../assets/theme';

import { HobbyList } from '../data/hobbies';

import ItemSmall from '../components/ItemSmall';

const data = [
  { id: 1, label: 'Gaming' },
  { id: 2, label: 'Musik' },
  { id: 3, label: 'Olahraga' },
  { id: 4, label: 'Travel' },
  { id: 5, label: 'Membaca' },
];

const ItemRecent = ({ item }) => {
  return (
    <View style={recent.button}>
      <Text style={recent.label}>
        {item.label}
      </Text>
    </View>
  );
};

const FlatListRecent = () => {

  const renderItem = ({ item }) => {
    return <ItemRecent item={item} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => (
        <View style={{ width: 10 }} />
      )}
      contentContainerStyle={{
        paddingHorizontal: 24,
        paddingVertical: 10,
      }}
    />
  );
};

export default function Discover() {

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <View style={styles.searchBar}>

          <Search
            size={18}
            color={colors.grey(0.5)}
          />

          <Text style={styles.placeholder}>
            Cari hobby...
          </Text>

        </View>

      </View>

      {/* Recent */}
      <View>

        <Text style={recent.text}>
          Recent Hobby
        </Text>

        <FlatListRecent />

      </View>

      {/* Hobby List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.listCard}>

          {HobbyList.map((item) => (
            <ItemSmall
              item={item}
              key={item.id}
            />
          ))}

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },

  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.grey(0.08),
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flex: 1,
  },

  placeholder: {
    fontSize: 14,
    color: colors.grey(0.5),
  },

  listCard: {
    paddingBottom: 20,
    gap: 10,
  },

});

const recent = StyleSheet.create({

  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: colors.grey(0.08),
  },

  label: {
    color: colors.grey(),
    fontSize: 12,
  },

  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black(),
    paddingHorizontal: 24,
    paddingTop: 10,
  },

});