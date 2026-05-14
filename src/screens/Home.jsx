import React, {
  useState,
  useRef,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';

import { SafeAreaView }
from 'react-native-safe-area-context';

import { Bell }
from 'lucide-react-native';

import {
  colors,
  fontType,
} from '../../assets/theme';

import { useFonts }
from 'expo-font';

import ListHobby
from '../components/ListHobby';

import {
  CategoryList,
} from '../data/categories';

const ItemCategory = ({
  item,
  onPress,
  color,
}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
    >

      <View style={category.item}>

        <Text
          style={{
            ...category.title,
            color,
          }}
        >

          {item.categoryName}

        </Text>

      </View>

    </TouchableOpacity>
  );
};

const FlatListCategory = () => {

  const [selected, setSelected] =
    useState(1);

  const renderItem = ({ item }) => {

    const color =
      item.id === selected
        ? colors.primary()
        : colors.grey();

    return (
      <ItemCategory
        item={item}
        color={color}
        onPress={() =>
          setSelected(item.id)
        }
      />
    );
  };

  return (
    <FlatList
      data={CategoryList}
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
      }}
    />
  );
};

export default function Home() {

  const [loaded] =
    useFonts(fontType);

  const scrollY =
    useRef(
      new Animated.Value(0)
    ).current;

  const diffClampY =
    Animated.diffClamp(
      scrollY,
      0,
      70
    );

  const headerY =
    diffClampY.interpolate({

      inputRange: [0, 70],

      outputRange: [0, -70],
    });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white()}
      />

      {/* Header */}
      <Animated.View

        style={[
          styles.header,
          {
            transform: [
              {
                translateY: headerY,
              },
            ],
          },
        ]}
      >

        <Text style={styles.title}>
          HobiTime.
        </Text>

        <Bell
          color={colors.black()}
          size={24}
        />

      </Animated.View>

      {/* Category */}
      <Animated.View

        style={[
          styles.categoryWrapper,
          {
            transform: [
              {
                translateY: headerY,
              },
            ],
          },
        ]}
      >

        <FlatListCategory />

      </Animated.View>

      {/* Content */}
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

        scrollEventThrottle={16}

        contentContainerStyle={{
          paddingTop: 120,
          paddingBottom: 20,
        }}
      >

        <ListHobby />

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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: colors.white(),
  },

  title: {
    fontSize: 24,
    fontFamily: 'Pjs-ExtraBold',
    color: colors.black(),
  },

  categoryWrapper: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: colors.white(),
    paddingVertical: 10,
  },

});

const category = StyleSheet.create({

  item: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.grey(0.1),
  },

  title: {
    fontFamily: 'Pjs-SemiBold',
    color: colors.grey(),
  },

});