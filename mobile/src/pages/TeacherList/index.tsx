import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import {
  ScrollView,
  BorderlessButton,
  RectButton,
} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

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

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" headerRight={<FilterButton />}>
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput style={styles.input} placeholder="Qual matéria?" />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Dia da semana"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Horário"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton onPress={() => {}} style={styles.submitButton}>
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
};

export default TeacherList;
