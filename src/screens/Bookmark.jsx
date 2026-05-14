import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { BookmarkPlus } from 'lucide-react-native';

import { colors } from '../../assets/theme';

import { HobbyList } from '../data/hobbies';

import ItemSmall from '../components/ItemSmall';

export default function Bookmark() {

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <Text style={styles.title}>
          Favorite Hobby
        </Text>

        <BookmarkPlus
          color={colors.black()}
          size={24}
        />

      </View>

      {/* List */}
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
  },

  title: {
    fontSize: 22,
    fontFamily: 'Pjs-ExtraBold',
    color: colors.black(),
  },

  listCard: {
    paddingVertical: 10,
    gap: 12,
    paddingBottom: 20,
  },

});