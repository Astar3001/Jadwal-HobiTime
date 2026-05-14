import React, {
  useState,
} from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import SearchBar
from '../components/SearchBar';

import { colors }
from '../../assets/theme';

import {
  HobbyList,
} from '../data/hobbies';

import ItemSmall
from '../components/ItemSmall';

const SearchPage = () => {

  const [searchPhrase,
    setSearchPhrase] =
    useState('');

  const filteredHobby =
    HobbyList.filter((item) =>
      item.title
        .toLowerCase()
        .includes(
          searchPhrase.toLowerCase()
        )
    );

  return (

    <SafeAreaView
      style={styles.container}
      edges={['top']}
    >

      {/* Header */}
      <View style={styles.header}>

        <SearchBar

          searchPhrase={
            searchPhrase
          }

          setSearchPhrase={
            setSearchPhrase
          }

        />

      </View>

      {/* Result */}
      <ScrollView

        showsVerticalScrollIndicator={
          false
        }

        contentContainerStyle={{
          paddingTop: 90,
          paddingBottom: 20,
          gap: 10,
        }}
      >

        {filteredHobby.map((item) => (

          <ItemSmall
            item={item}
            key={item.id}
          />

        ))}

      </ScrollView>

    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },

  header: {
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
  },

});