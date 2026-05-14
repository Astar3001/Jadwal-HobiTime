import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import {
  ArrowLeft,
  Heart,
  Bookmark,
  Share2,
} from 'lucide-react-native';

import { useNavigation } from '@react-navigation/native';

import { HobbyList } from '../data/hobbies';

import { Image } from 'expo-image';

import { colors } from '../../assets/theme';

const HobbyDetail = ({ route }) => {

  const { hobbyId } = route.params;

  const navigation = useNavigation();

  const selectedHobby = HobbyList.find(
    (item) => item.id === hobbyId
  );

  const [liked, setLiked] = useState(false);

  const [saved, setSaved] = useState(false);

  if (!selectedHobby) return null;

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft
            color={colors.black()}
            size={24}
          />
        </TouchableOpacity>

        <Share2
          color={colors.black()}
          size={22}
        />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >

        {/* Image */}
        <Image
          style={styles.image}
          source={{
            uri: selectedHobby.image,
          }}
          contentFit="cover"
          transition={300}
        />

        {/* Content */}
        <View style={styles.content}>

          <Text style={styles.category}>
            {selectedHobby.category}
          </Text>

          <Text style={styles.title}>
            {selectedHobby.title}
          </Text>

          <Text style={styles.description}>
            Hobby ini dilakukan untuk meningkatkan
            produktivitas dan mengisi waktu luang
            dengan kegiatan yang bermanfaat serta
            menyenangkan untuk dilakukan setiap hari.
          </Text>

          <View style={styles.infoBox}>

            <Text style={styles.infoText}>
              Durasi : {selectedHobby.duration}
            </Text>

            <Text style={styles.infoText}>
              Jadwal : {selectedHobby.createdAt}
            </Text>

          </View>

        </View>

      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>

        <TouchableOpacity
          onPress={() => setLiked(!liked)}
        >
          <Heart
            color={
              liked
                ? colors.primary()
                : colors.grey()
            }
            fill={
              liked
                ? colors.primary()
                : 'transparent'
            }
            size={24}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSaved(!saved)}
        >
          <Bookmark
            color={
              saved
                ? colors.primary()
                : colors.grey()
            }
            fill={
              saved
                ? colors.primary()
                : 'transparent'
            }
            size={24}
          />
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default HobbyDetail;

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
  },

  image: {
    width: '100%',
    height: 260,
  },

  content: {
    padding: 24,
    gap: 15,
  },

  category: {
    color: colors.primary(),
    fontWeight: 'bold',
    fontSize: 13,
  },

  title: {
    fontSize: 24,
    fontFamily: 'Pjs-Bold',
    color: colors.black(),
  },

  description: {
    color: colors.grey(),
    lineHeight: 24,
  },

  infoBox: {
    backgroundColor: colors.primary(0.08),
    padding: 18,
    borderRadius: 14,
    gap: 8,
  },

  infoText: {
    color: colors.black(),
    fontFamily: 'Pjs-SemiBold',
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white(),
    borderTopWidth: 1,
    borderTopColor: colors.grey(0.1),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    paddingVertical: 18,
  },

});