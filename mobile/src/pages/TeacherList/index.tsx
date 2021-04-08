import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => (
  <View style={styles.container}>
    <PageHeader title="Proffys disponíveis" />

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

export default TeacherList;
