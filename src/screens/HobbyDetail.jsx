import React, {
  useState,
  useRef,
  useEffect,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  Alert,
} from 'react-native';

import { SafeAreaView }
from 'react-native-safe-area-context';

import {
  ArrowLeft,
  Heart,
  Bookmark,
  Share2,
  Trash2,
  Pencil,
} from 'lucide-react-native';

import {
  useNavigation,
} from '@react-navigation/native';

import axios from 'axios';

import { Image }
from 'expo-image';

import { colors }
from '../../assets/theme';

import {
  formatDate,
} from '../utils/formatDate';

const HobbyDetail = ({ route }) => {

  const { hobbyId } =
    route.params;

  const navigation =
    useNavigation();

  const [selectedHobby,
    setSelectedHobby] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [liked, setLiked] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  useEffect(() => {

    getDetailHobby();

  }, []);

  const getDetailHobby =
    async () => {

      try {

        const response =
          await axios.get(
            `https://6a062387c83ba8ad9b3d43f2.mockapi.io/hobitime/hobbies/${hobbyId}`
          );

        setSelectedHobby(
          response.data
        );

        setLoading(false);

      } catch (error) {

        console.log(error);
      }
    };

  const deleteHobby =
    async () => {

      try {

        await axios.delete(
          `https://6a062387c83ba8ad9b3d43f2.mockapi.io/hobitime/hobbies/${hobbyId}`
        );

        Alert.alert(
          'Success',
          'Hobby berhasil dihapus'
        );

        navigation.goBack();

      } catch (error) {

        console.log(error);
      }
    };

  const handleDelete =
    () => {

      Alert.alert(
        'Delete Hobby',
        'Yakin ingin menghapus hobby ini?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },

          {
            text: 'Delete',
            style: 'destructive',
            onPress: deleteHobby,
          },
        ]
      );
    };

  const scrollY =
    useRef(
      new Animated.Value(0)
    ).current;

  const diffClampY =
    Animated.diffClamp(
      scrollY,
      0,
      52
    );

  const headerY =
    diffClampY.interpolate({

      inputRange: [0, 52],

      outputRange: [0, -52],
    });

  const bottomBarY =
    diffClampY.interpolate({

      inputRange: [0, 52],

      outputRange: [0, 52],
    });

  if (loading) {

    return (

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <ActivityIndicator
          size="large"
          color={colors.primary()}
        />

      </View>
    );
  }

  if (!selectedHobby)
    return null;

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <Animated.View

        style={[
          styles.header,
          {
            transform: [
              {
                translateY: headerY,
              },
            ],
          },
        ]}
      >

        <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }
        >

          <ArrowLeft
            color={colors.black()}
            size={24}
          />

        </TouchableOpacity>

        <View style={styles.headerRight}>

          {/* Edit */}
          <TouchableOpacity

            onPress={() =>
              navigation.navigate(
                'EditHobby',
                {
                  hobbyId,
                }
              )
            }
          >

            <Pencil
              color={colors.primary()}
              size={22}
            />

          </TouchableOpacity>

          {/* Delete */}
          <TouchableOpacity
            onPress={handleDelete}
          >

            <Trash2
              color="red"
              size={22}
            />

          </TouchableOpacity>

          {/* Share */}
          <Share2
            color={colors.black()}
            size={22}
          />

        </View>

      </Animated.View>

      {/* Content */}
      <Animated.ScrollView

        showsVerticalScrollIndicator={false}

        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],

          {
            useNativeDriver: true,
          }
        )}

        contentContainerStyle={{
          paddingTop: 62,
          paddingBottom: 100,
        }}
      >

        <Image
          style={styles.image}
          source={{
            uri: selectedHobby.image,
          }}
          contentFit="cover"
          transition={300}
        />

        <View style={styles.content}>

          <Text style={styles.category}>
            {selectedHobby.category}
          </Text>

          <Text style={styles.title}>
            {selectedHobby.title}
          </Text>

          <Text style={styles.description}>
            {selectedHobby.description}
          </Text>

          <View style={styles.infoBox}>

            <Text style={styles.infoText}>
              Duration :
              {' '}
              {selectedHobby.duration}
            </Text>

            <Text style={styles.infoText}>
              Created :
              {' '}
              {formatDate(
                selectedHobby.createdAt
              )}
            </Text>

          </View>

        </View>

      </Animated.ScrollView>

      {/* Bottom Bar */}
      <Animated.View

        style={[
          styles.bottomBar,
          {
            transform: [
              {
                translateY: bottomBarY,
              },
            ],
          },
        ]}
      >

        <TouchableOpacity
          onPress={() =>
            setLiked(!liked)
          }
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
          onPress={() =>
            setSaved(!saved)
          }
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

      </Animated.View>

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
    height: 52,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: colors.white(),
  },

  headerRight: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
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
    lineHeight: 28,
    textAlign: 'justify',
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