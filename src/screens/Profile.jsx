import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Settings } from 'lucide-react-native';

import { Image } from 'expo-image';

import { colors } from '../../assets/theme';

import { ProfileData } from '../data/profiledata';

import { HobbyList } from '../data/hobbies';

import ItemSmall from '../components/ItemSmall';

const formatNumber = (number) => {

  if (!number) return '0';

  if (number >= 1000) {
    return (
      (number / 1000).toFixed(1)
        .replace('.0', '') + 'K'
    );
  }

  return number.toString();
};

export default function Profile() {

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <Settings
          color={colors.black()}
          size={24}
        />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* Profile */}
        <View style={styles.profileHeader}>

          <Image
            style={profile.pic}
            source={{
              uri: ProfileData.profilePict,
            }}
            contentFit="cover"
            transition={200}
          />

          <View style={styles.profileInfo}>

            <Text style={profile.name}>
              {ProfileData.name}
            </Text>

            <Text style={profile.info}>
              Member since {ProfileData.createdAt}
            </Text>

          </View>

          {/* Stats */}
          <View style={profile.statsContainer}>

            <View style={profile.statItem}>
              <Text style={profile.sum}>
                {ProfileData.hobbyPosted}
              </Text>

              <Text style={profile.tag}>
                Hobby
              </Text>
            </View>

            <View style={profile.statItem}>
              <Text style={profile.sum}>
                {formatNumber(ProfileData.following)}
              </Text>

              <Text style={profile.tag}>
                Following
              </Text>
            </View>

            <View style={profile.statItem}>
              <Text style={profile.sum}>
                {formatNumber(ProfileData.follower)}
              </Text>

              <Text style={profile.tag}>
                Follower
              </Text>
            </View>

          </View>

          {/* Button */}
          <TouchableOpacity
            style={profile.buttonEdit}
          >

            <Text style={profile.buttonText}>
              Edit Profile
            </Text>

          </TouchableOpacity>

        </View>

        {/* Hobby List */}
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
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
  },

  profileHeader: {
    alignItems: 'center',
    gap: 15,
    paddingVertical: 20,
  },

  profileInfo: {
    alignItems: 'center',
    gap: 5,
  },

  listCard: {
    paddingVertical: 10,
    gap: 10,
    paddingBottom: 30,
  },

});

const profile = StyleSheet.create({

  pic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  name: {
    fontSize: 22,
    fontFamily: 'Pjs-Bold',
    color: colors.black(),
  },

  info: {
    fontSize: 12,
    color: colors.grey(),
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 10,
  },

  statItem: {
    alignItems: 'center',
  },

  sum: {
    fontSize: 18,
    fontFamily: 'Pjs-SemiBold',
    color: colors.black(),
  },

  tag: {
    fontSize: 13,
    color: colors.grey(),
  },

  buttonEdit: {
    backgroundColor: colors.primary(0.1),
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 10,
  },

  buttonText: {
    fontFamily: 'Pjs-SemiBold',
    color: colors.primary(),
  },

});