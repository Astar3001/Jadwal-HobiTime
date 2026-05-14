import React, { useState } from 'react';

import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Image } from 'expo-image';

import {
  Bookmark,
  Clock3,
} from 'lucide-react-native';

import { colors } from '../../assets/theme';

import { HobbyList } from '../data/hobbies';

import {
  useNavigation,
} from '@react-navigation/native';

const ItemHorizontal = ({
  item,
  isBookmarked,
  onPress,
}) => {

  const navigation =
    useNavigation();

  return (

    <TouchableOpacity

      style={styles.horizontalCard}

      onPress={() =>
        navigation.navigate(
          'HobbyDetail',
          {
            hobbyId: item.id,
          }
        )
      }
    >

      <Image
        style={styles.horizontalImage}
        source={{ uri: item.image }}
        contentFit="cover"
        transition={300}
      />

      <View style={styles.overlay}>

        <View style={styles.horizontalContent}>

          <Text style={styles.horizontalTitle}>
            {item.title}
          </Text>

          <Text style={styles.horizontalText}>
            {item.createdAt}
          </Text>

        </View>

        <TouchableOpacity
          style={styles.bookmark}
          onPress={onPress}
        >

          <Bookmark
            color={colors.white()}
            fill={
              isBookmarked
                ? colors.white()
                : 'transparent'
            }
            size={18}
          />

        </TouchableOpacity>

      </View>

    </TouchableOpacity>
  );
};

const ItemSmall = ({ item }) => {

  const navigation =
    useNavigation();

  return (

    <TouchableOpacity

      style={styles.verticalCard}

      onPress={() =>
        navigation.navigate(
          'HobbyDetail',
          {
            hobbyId: item.id,
          }
        )
      }
    >

      <Image
        style={styles.verticalImage}
        source={{ uri: item.image }}
        contentFit="cover"
      />

      <View style={styles.verticalContent}>

        <Text style={styles.category}>
          {item.category}
        </Text>

        <Text style={styles.verticalTitle}>
          {item.title}
        </Text>

        <View style={styles.info}>

          <Clock3
            size={12}
            color={colors.grey()}
          />

          <Text style={styles.infoText}>
            {item.duration}
          </Text>

        </View>

      </View>

    </TouchableOpacity>
  );
};

export default function ListHobby() {

  const [bookmark, setBookmark] =
    useState([]);

  const horizontalData =
    HobbyList.slice(0, 2);

  const verticalData =
    HobbyList.slice(2);

  const toggleBookmark = (itemId) => {

    if (bookmark.includes(itemId)) {

      setBookmark(
        bookmark.filter(
          (id) => id !== itemId
        )
      );

    } else {

      setBookmark([
        ...bookmark,
        itemId,
      ]);

    }
  };

  return (
    <ScrollView>

      {/* Horizontal */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 15,
          paddingHorizontal: 24,
        }}
      >

        {horizontalData.map((item) => {

          const isBookmarked =
            bookmark.includes(item.id);

          return (
            <ItemHorizontal
              key={item.id}
              item={item}
              isBookmarked={isBookmarked}
              onPress={() =>
                toggleBookmark(item.id)
              }
            />
          );
        })}

      </ScrollView>

      {/* Vertical */}
      <View style={styles.verticalContainer}>

        {verticalData.map((item) => (
          <ItemSmall
            key={item.id}
            item={item}
          />
        ))}

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  horizontalCard: {
    width: 280,
    position: 'relative',
  },

  horizontalImage: {
    width: '100%',
    height: 200,
    borderRadius: 18,
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },

  horizontalContent: {
    width: '70%',
  },

  horizontalTitle: {
    color: colors.white(),
    fontSize: 18,
    fontWeight: 'bold',
  },

  horizontalText: {
    color: colors.white(),
    marginTop: 5,
  },

  bookmark: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: colors.white(0.3),
    justifyContent: 'center',
    alignItems: 'center',
  },

  verticalContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 15,
  },

  verticalCard: {
    backgroundColor: colors.primary(0.05),
    borderRadius: 18,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  verticalImage: {
    width: 100,
    height: 100,
  },

  verticalContent: {
    flex: 1,
    padding: 14,
    justifyContent: 'space-between',
  },

  category: {
    color: colors.primary(),
    fontWeight: 'bold',
    fontSize: 12,
  },

  verticalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black(),
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  infoText: {
    color: colors.grey(),
    fontSize: 12,
  },

});