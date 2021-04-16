import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/core';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    async function getFavorites() {
      const favoritesData = await AsyncStorage.getItem('favorites');

      let favoritesIds = [];

      if (favoritesData) {
        favoritesIds = JSON.parse(favoritesData);
      }

      // console.log(favoritesIds);
      setFavorites(favoritesIds);
    }
    getFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingBottom: 16,
          paddingHorizontal: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorite={true} />
        ))}
      </ScrollView>
    </View>
  );
};
export default Favorites;
