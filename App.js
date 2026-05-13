import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell } from 'lucide-react-native';
import { colors, fontType } from './assets/theme';
import { useFonts } from 'expo-font';
import ListHobby from './src/components/ListHobby';
import { CategoryList } from './src/data/categories';

const ItemCategory = ({ item, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
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

  const [selected, setSelected] = useState(1);

  const renderItem = ({ item }) => {

    const color =
      item.id === selected
        ? colors.primary()
        : colors.grey();

    return (
      <ItemCategory
        item={item}
        color={color}
        onPress={() => setSelected(item.id)}
      />
    );
  };

  return (
    <FlatList
      data={CategoryList}
      keyExtractor={(item) => item.id.toString()}
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

      {/* Header */}
      <View style={styles.header}>

        <Text style={styles.title}>
          HobiTime.
        </Text>

        <Bell
          color={colors.black()}
          size={24}
        />

      </View>

      {/* Category */}
      <View style={styles.listCategory}>
        <FlatListCategory />
      </View>

      {/* List Hobby */}
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
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  },

  title: {
    fontFamily: 'Pjs-SemiBold',
    color: colors.grey(),
  },

});