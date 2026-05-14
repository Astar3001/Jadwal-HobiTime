import React, { useRef } from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Pressable,
} from 'react-native';

import { SafeAreaView }
from 'react-native-safe-area-context';

import { Search }
from 'lucide-react-native';

import {
  useNavigation,
} from '@react-navigation/native';

import { colors }
from '../../assets/theme';

import { HobbyList }
from '../data/hobbies';

import ItemSmall
from '../components/ItemSmall';

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
      keyExtractor={(item) =>
        item.id.toString()
      }
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

  const navigation =
    useNavigation();

  const scrollY =
    useRef(
      new Animated.Value(0)
    ).current;

  const diffClampY =
    Animated.diffClamp(
      scrollY,
      0,
      142
    );

  const recentY =
    diffClampY.interpolate({

      inputRange: [0, 142],

      outputRange: [0, -142],

      extrapolate: 'clamp',
    });

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <Pressable
          onPress={() =>
            navigation.navigate(
              'SearchPage'
            )
          }
          style={{ flex: 1 }}
        >

          <View style={styles.searchBar}>

            <Search
              size={18}
              color={colors.grey(0.5)}
            />

            <Text style={styles.placeholder}>
              Cari hobby...
            </Text>

          </View>

        </Pressable>

      </View>

      {/* Recent */}
      <Animated.View

        style={[
          recent.container,
          {
            transform: [
              {
                translateY: recentY,
              },
            ],
          },
        ]}
      >

        <Text style={recent.text}>
          Recent Hobby
        </Text>

        <FlatListRecent />

      </Animated.View>

      {/* List */}
      <Animated.ScrollView

        showsVerticalScrollIndicator={false}

        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],

          {
            useNativeDriver: true,
          }
        )}

        contentContainerStyle={{
          paddingTop: 142,
          paddingBottom: 20,
        }}
      >

        <View style={styles.listCard}>

          {HobbyList.map((item) => (
            <ItemSmall
              item={item}
              key={item.id}
            />
          ))}

        </View>

      </Animated.ScrollView>

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
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
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
    gap: 10,
    paddingBottom: 20,
  },

});

const recent = StyleSheet.create({

  container: {
    position: 'absolute',
    backgroundColor: colors.white(),
    zIndex: 999,
    top: 52,
    left: 0,
    right: 0,
    elevation: 1000,
  },

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