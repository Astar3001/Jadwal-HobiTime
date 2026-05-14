import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Image } from 'expo-image';

import { Clock3 } from 'lucide-react-native';

import { colors } from '../../assets/theme';

const ItemSmall = ({ item }) => {

  return (
    <View style={styles.cardItem}>

      <Image
        style={styles.cardImage}
        source={{
          uri: item.image,
        }}
        contentFit="cover"
        transition={200}
      />

      <View style={styles.cardContent}>

        <Text style={styles.cardCategory}>
          {item.category}
        </Text>

        <Text style={styles.cardTitle}>
          {item.title}
        </Text>

        <View style={styles.cardInfo}>

          <Clock3
            size={12}
            color={colors.grey()}
          />

          <Text style={styles.cardText}>
            {item.duration}
          </Text>

        </View>

      </View>

    </View>
  );
};

export default ItemSmall;

const styles = StyleSheet.create({

  cardItem: {
    backgroundColor: colors.primary(0.05),
    flexDirection: 'row',
    borderRadius: 16,
    marginHorizontal: 24,
    overflow: 'hidden',
  },

  cardImage: {
    width: 100,
    height: 100,
  },

  cardContent: {
    flex: 1,
    padding: 14,
    justifyContent: 'space-between',
  },

  cardCategory: {
    color: colors.primary(),
    fontSize: 12,
    fontWeight: 'bold',
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black(),
  },

  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  cardText: {
    fontSize: 12,
    color: colors.grey(),
  },

});