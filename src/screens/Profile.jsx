import React, {
  useState,
} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {
  Settings,
  Plus,
} from 'lucide-react-native';

import {
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';

import { Image }
from 'expo-image';

import axios from 'axios';

import ItemSmall
from '../components/ItemSmall';

import {
  colors,
} from '../../assets/theme';

export default function Profile() {

  const navigation =
    useNavigation();

  const [loading, setLoading] =
    useState(true);

  const [hobbyData,
    setHobbyData] =
    useState([]);

  const getDataHobby =
    async () => {

      try {

        const response =
          await axios.get(
            'https://6a062387c83ba8ad9b3d43f2.mockapi.io/hobitime/hobbies'
          );

        setHobbyData(
          response.data
        );

        setLoading(false);

      } catch (error) {

        console.log(error);
      }
    };

  useFocusEffect(
    React.useCallback(() => {

      getDataHobby();

    }, [])
  );

  return (

    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity>

          <Settings
            color={colors.black()}
            size={24}
          />

        </TouchableOpacity>

      </View>

      {/* Content */}
      <ScrollView

        showsVerticalScrollIndicator={
          false
        }

        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 140,
          gap: 20,
        }}
      >

        {/* Profile */}
        <View style={styles.profile}>

          <Image

            style={styles.profileImage}

            source={{
              uri:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
            }}

            contentFit="cover"

          />

          <Text style={styles.name}>
            Lucky Rivaldo
          </Text>

          <Text style={styles.info}>
            Hobby Enthusiast
          </Text>

          {/* Stats */}
          <View style={styles.statsContainer}>

            <View style={styles.statItem}>

              <Text style={styles.statNumber}>
                {hobbyData.length}
              </Text>

              <Text style={styles.statLabel}>
                Hobby
              </Text>

            </View>

            <View style={styles.statItem}>

              <Text style={styles.statNumber}>
                120
              </Text>

              <Text style={styles.statLabel}>
                Following
              </Text>

            </View>

            <View style={styles.statItem}>

              <Text style={styles.statNumber}>
                2.5K
              </Text>

              <Text style={styles.statLabel}>
                Followers
              </Text>

            </View>

          </View>

        </View>

        {/* Hobby List */}
        <View style={styles.list}>

          {loading ? (

            <ActivityIndicator
              size="large"
              color={colors.primary()}
            />

          ) : (

            hobbyData.map((item) => (

              <ItemSmall
                item={item}
                key={item.id}
              />

            ))
          )}

        </View>

      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity

        style={styles.floatingButton}

        onPress={() =>
          navigation.navigate(
            'AddHobby'
          )
        }
      >

        <Plus
          color={colors.white()}
          size={24}
        />

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },

  header: {
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    marginTop: 16,
  },

  profile: {
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  name: {
    fontSize: 20,
    fontFamily: 'Pjs-Bold',
    color: colors.black(),
  },

  info: {
    fontSize: 14,
    color: colors.grey(),
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 10,
  },

  statItem: {
    alignItems: 'center',
    gap: 5,
  },

  statNumber: {
    fontSize: 18,
    fontFamily: 'Pjs-Bold',
    color: colors.black(),
  },

  statLabel: {
    fontSize: 13,
    color: colors.grey(),
  },

  list: {
    gap: 10,
  },

  floatingButton: {
    position: 'absolute',
    bottom: 90,
    right: 24,
    backgroundColor:
      colors.primary(),
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },

});