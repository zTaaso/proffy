import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import {
  ScrollView,
  BorderlessButton,
  RectButton,
} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

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
    try {
      const response = await api.get('classes', {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(response.data);
    } catch (err) {
      console.log(err);
      Alert.alert('Erro', 'Erro ao filtrar Proffys');
    }
  }

  useEffect(() => {
    api.get('classes').then((response) => setTeachers(response.data));
  }, []);

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
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingBottom: 16,
          paddingHorizontal: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
