import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, RefreshControl } from 'react-native';
import {
  ScrollView,
  BorderlessButton,
  RectButton,
} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/core';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Loading from '../../components/Loading';

import api from '../../services/api';
import styles from './styles';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const FilterButton = () => {
    function handleToggleFilter() {
      setIsFiltersVisible(!isFiltersVisible);
    }

    return (
      <BorderlessButton onPress={handleToggleFilter}>
        <Feather name="filter" color="#fff" size={25} />
      </BorderlessButton>
    );
  };

  async function handleSubmitFilter() {
    setLoading(true);
    try {
      const response = await api.get('classes', {
        params: {
          subject,
          week_day,
          time,
        },
      });

      const teachersList = response.data;

      if (!teachersList[0]) {
        throw new Error(response.data.error);
      }

      setTeachers(teachersList);
      setIsFiltersVisible(false);
    } catch (err) {
      console.log(err);
      Alert.alert('Erro', `Erro ao filtrar Proffys \n\n${err}`, undefined, {
        cancelable: true,
      });
    }
    setLoading(false);
  }

  async function loadTeachers() {
    setLoading(true);
    setRefreshing(true);

    try {
      const response = await api.get('classes');
      const serializedTeachers = response.data.map((teacher: Teacher) => ({
        ...teacher,
        favorite: false,
      }));

      setTeachers(serializedTeachers);
    } catch (err) {
      console.log(err);
      Alert.alert('Erro', 'Erro ao buscar professores.');
    }
    setRefreshing(false);

    setLoading(false);
  }

  useEffect(() => {
    loadTeachers();
  }, []);

  useFocusEffect(() => {
    async function getFavorites() {
      const favoritesData = await AsyncStorage.getItem('favorites');

      let favoritesIds: number[] = [];

      if (favoritesData) {
        favoritesIds = JSON.parse(favoritesData).map(
          (favorite: Teacher) => favorite.id
        );
      }

      setFavorites(favoritesIds);
    }
    getFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" headerRight={<FilterButton />}>
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={setSubject}
              placeholder="Qual matéria?"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={setWeekDay}
                  placeholder="Dia da semana"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Horário"
                  value={time}
                  onChangeText={setTime}
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              onPress={handleSubmitFilter}
              style={styles.submitButton}
            >
              {loading ? (
                <Loading />
              ) : (
                <Text style={styles.submitButtonText}>Filtrar</Text>
              )}
            </RectButton>
          </View>
        )}
      </PageHeader>

      {loading ? (
        <Loading size="large" color="#8257e5" />
      ) : (
        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            paddingBottom: 16,
            paddingHorizontal: 16,
          }}
          refreshControl={
            <RefreshControl
              onRefresh={loadTeachers}
              refreshing={refreshing}
              enabled={true}
            />
          }
        >
          {teachers.map((teacher: Teacher) => (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              // favorite={favorites.includes(teacher.id)}
              favorite={favorites.includes(teacher.id)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default TeacherList;
