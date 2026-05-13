import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Bell } from 'lucide-react-native';

import { colors, fontType } from './assets/theme';

import { useFonts } from 'expo-font';

import ListHobby from './src/components/ListHobby';

export default function App() {

  const [loaded] = useFonts(fontType);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white()}
      />

      {/* Header aplikasi */}
      <View style={styles.header}>

        <Text style={styles.title}>
          HobiTime.
        </Text>

        <Bell
          color={colors.black()}
          size={24}
        />

      </View>

      {/* Category hobby */}
      <View style={styles.listCategory}>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          <View style={{ ...category.item, marginLeft: 24 }}>
            <Text
              style={{
                ...category.title,
                color: colors.primary(),
              }}
            >
              Semua
            </Text>
          </View>

          <View style={category.item}>
            <Text style={category.title}>
              Olahraga
            </Text>
          </View>

          <View style={category.item}>
            <Text style={category.title}>
              Gaming
            </Text>
          </View>

          <View style={category.item}>
            <Text style={category.title}>
              Musik
            </Text>
          </View>

          <View style={category.item}>
            <Text style={category.title}>
              Travel
            </Text>
          </View>

          <View
            style={{
              ...category.item,
              marginRight: 24,
            }}
          >
            <Text style={category.title}>
              Membaca
            </Text>
          </View>

        </ScrollView>

      </View>

      {/* List hobby */}
      <ListHobby />

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
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
  },

  title: {
    fontSize: 24,
    fontFamily: 'Pjs-ExtraBold',
    color: colors.black(),
  },

  listCategory: {
    paddingVertical: 10,
  },

});

const category = StyleSheet.create({

  item: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.grey(0.1),
    marginHorizontal: 5,
  },

  title: {
    fontFamily: 'Pjs-SemiBold',
    color: colors.grey(),
  },

});