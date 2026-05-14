import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { Image }
from 'expo-image';

import {
  Clock3,
  Bookmark,
} from 'lucide-react-native';

import {
  useNavigation,
} from '@react-navigation/native';

import { colors }
from '../../assets/theme';

import {
  formatDate,
} from '../utils/formatDate';

const ItemSmall = ({ item }) => {

  const navigation =
    useNavigation();

  return (

    <TouchableOpacity

      onPress={() =>
        navigation.navigate(
          'HobbyDetail',
          {
            hobbyId: item.id,
          }
        )
      }

      style={styles.cardItem}
    >

      <Image

        style={styles.cardImage}

        source={{
          uri: item.image,
        }}

        contentFit="cover"

        transition={300}

      />

      <View style={styles.cardContent}>

        <View style={{ gap: 5 }}>

          <Text style={styles.cardCategory}>
            {item.category}
          </Text>

          <Text style={styles.cardTitle}>
            {item.title}
          </Text>

        </View>

        <View style={styles.cardInfo}>

          <Clock3
            size={12}
            color={colors.grey()}
          />

          <Text style={styles.cardText}>
            {formatDate(
              item.createdAt
            )}
          </Text>

        </View>

      </View>

      <Bookmark
        color={colors.grey()}
        size={18}
      />

    </TouchableOpacity>
  );
};

export default ItemSmall;

const styles = StyleSheet.create({

  cardItem: {
    backgroundColor:
      colors.primary(0.05),

    flexDirection: 'row',

    borderRadius: 16,

    marginHorizontal: 24,

    marginVertical: 5,

    padding: 10,

    alignItems: 'center',

    gap: 12,
  },

  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 14,
  },

  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 10,
  },

  cardCategory: {
    color: colors.primary(),
    fontSize: 12,
    fontWeight: 'bold',
  },

  cardTitle: {
    fontSize: 15,
    fontFamily: 'Pjs-Bold',
    color: colors.black(),
  },

  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  cardText: {
    fontSize: 11,
    color: colors.grey(),
  },

});