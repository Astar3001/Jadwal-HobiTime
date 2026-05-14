import React, {
  useState,
} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {
  ArrowLeft,
} from 'lucide-react-native';

import {
  useNavigation,
} from '@react-navigation/native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import axios from 'axios';

import {
  colors,
} from '../../assets/theme';

const AddHobby = () => {

  const navigation =
    useNavigation();

  const [loading, setLoading] =
    useState(false);

  const [hobbyData,
    setHobbyData] =
    useState({

      title: '',
      category: '',
      image: '',
      description: '',
      duration: '',
    });

  const handleChange =
    (key, value) => {

      setHobbyData({

        ...hobbyData,

        [key]: value,
      });
    };

  const handleUpload =
    async () => {

      setLoading(true);

      try {

        await axios.post(

          'https://6a062387c83ba8ad9b3d43f2.mockapi.io/hobitime/hobbies',

          {

            title:
              hobbyData.title,

            category:
              hobbyData.category,

            image:
              hobbyData.image,

            description:
              hobbyData.description,

            duration:
              hobbyData.duration,

            createdAt:
              new Date(),
          }
        );

        setLoading(false);

        navigation.goBack();

      } catch (error) {

        console.log(error);

        setLoading(false);
      }
    };

  return (

    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

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

        <Text style={styles.title}>
          Add Hobby
        </Text>

      </View>

      {/* Form */}
      <ScrollView

        contentContainerStyle={{
          padding: 24,
          gap: 16,
          paddingBottom: 40,
        }}
      >

        <TextInput
          placeholder="Title"
          value={hobbyData.title}
          onChangeText={(text) =>
            handleChange(
              'title',
              text
            )
          }
          style={styles.input}
        />

        <TextInput
          placeholder="Category"
          value={hobbyData.category}
          onChangeText={(text) =>
            handleChange(
              'category',
              text
            )
          }
          style={styles.input}
        />

        <TextInput
          placeholder="Image URL"
          value={hobbyData.image}
          onChangeText={(text) =>
            handleChange(
              'image',
              text
            )
          }
          style={styles.input}
        />

        <TextInput
          placeholder="Duration"
          value={hobbyData.duration}
          onChangeText={(text) =>
            handleChange(
              'duration',
              text
            )
          }
          style={styles.input}
        />

        <TextInput
          placeholder="Description"
          value={hobbyData.description}
          onChangeText={(text) =>
            handleChange(
              'description',
              text
            )
          }
          multiline
          style={[
            styles.input,
            {
              height: 150,
              textAlignVertical:
                'top',
            },
          ]}
        />

        <TouchableOpacity

          style={styles.button}

          onPress={handleUpload}
        >

          <Text style={styles.buttonText}>
            Upload Hobby
          </Text>

        </TouchableOpacity>

      </ScrollView>

      {/* Loading */}
      {loading && (

        <View
          style={styles.loadingOverlay}
        >

          <ActivityIndicator
            size="large"
            color={colors.primary()}
          />

        </View>
      )}

    </SafeAreaView>
  );
};

export default AddHobby;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 24,
    height: 60,
  },

  title: {
    fontSize: 18,
    fontFamily: 'Pjs-Bold',
    color: colors.black(),
  },

  input: {
    backgroundColor:
      colors.grey(0.08),

    borderRadius: 12,

    paddingHorizontal: 16,

    paddingVertical: 14,

    color: colors.black(),
  },

  button: {
    backgroundColor:
      colors.primary(),

    paddingVertical: 16,

    borderRadius: 14,

    alignItems: 'center',
  },

  buttonText: {
    color: colors.white(),
    fontFamily: 'Pjs-Bold',
    fontSize: 14,
  },

  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:
      colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },

});