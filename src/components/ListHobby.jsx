import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import { colors } from '../../assets/theme';
import {
  Clock3,
  Bookmark,
} from 'lucide-react-native';

export default function ListHobby() {
  return (
    <ScrollView>

      {/* Hobby Horizontal */}
      <View style={styles.horizontalContainer}>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 15 }}
        >

          {/* Card 1 */}
          <View style={{ ...styles.horizontalCard, marginLeft: 24 }}>
            <ImageBackground
              style={styles.horizontalImage}
              imageStyle={{ borderRadius: 18 }}
              source={{
                uri: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1000&auto=format&fit=crop',
              }}
            >
              <View style={styles.overlay}>
                <View>
                  <Text style={styles.horizontalTitle}>
                    Belajar Gitar
                  </Text>

                  <Text style={styles.horizontalText}>
                    Target hari ini
                  </Text>
                </View>

                <View style={styles.bookmark}>
                  <Bookmark
                    color={colors.white()}
                    size={18}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* Card 2 */}
          <View style={styles.horizontalCard}>
            <ImageBackground
              style={styles.horizontalImage}
              imageStyle={{ borderRadius: 18 }}
              source={{
                uri: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1000&auto=format&fit=crop',
              }}
            >
              <View style={styles.overlay}>
                <View>
                  <Text style={styles.horizontalTitle}>
                    Jogging Pagi
                  </Text>

                  <Text style={styles.horizontalText}>
                    5 KM setiap pagi
                  </Text>
                </View>

                <View style={styles.bookmark}>
                  <Bookmark
                    color={colors.white()}
                    size={18}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>

      {/* Vertical Hobby */}
      <View style={styles.verticalContainer}>

        {/* Item 1 */}
        <View style={styles.verticalCard}>
          <Image
            style={styles.verticalImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop',
            }}
          />

          <View style={styles.verticalContent}>

            <Text style={styles.category}>
              Gaming
            </Text>

            <Text style={styles.verticalTitle}>
              Push Rank Mobile Game
            </Text>

            <View style={styles.info}>
              <Clock3
                size={12}
                color={colors.grey()}
              />

              <Text style={styles.infoText}>
                2 Jam / Hari
              </Text>
            </View>

          </View>
        </View>

        {/* Item 2 */}
        <View style={styles.verticalCard}>
          <Image
            style={styles.verticalImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop',
            }}
          />

          <View style={styles.verticalContent}>

            <Text style={styles.category}>
              Membaca
            </Text>

            <Text style={styles.verticalTitle}>
              Membaca Novel
            </Text>

            <View style={styles.info}>
              <Clock3
                size={12}
                color={colors.grey()}
              />

              <Text style={styles.infoText}>
                30 Menit
              </Text>
            </View>

          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  horizontalContainer: {
    marginTop: 10,
  },

  horizontalCard: {
    width: 280,
  },

  horizontalImage: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },

  overlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 18,
  },

  horizontalTitle: {
    color: colors.white(),
    fontSize: 18,
    fontWeight: 'bold',
  },

  horizontalText: {
    color: colors.white(),
    marginTop: 4,
  },

  bookmark: {
    backgroundColor: colors.white(0.3),
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  verticalContainer: {
    paddingHorizontal: 24,
    marginTop: 20,
    gap: 15,
    paddingBottom: 30,
  },

  verticalCard: {
    backgroundColor: colors.primary(0.05),
    borderRadius: 18,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  verticalImage: {
    width: 100,
    height: 100,
  },

  verticalContent: {
    flex: 1,
    padding: 14,
    justifyContent: 'space-between',
  },

  category: {
    color: colors.primary(),
    fontWeight: 'bold',
    fontSize: 12,
  },

  verticalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black(),
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  infoText: {
    color: colors.grey(),
    fontSize: 12,
  },
});