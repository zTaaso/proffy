import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import api from '../../services/api';

import styles from './styles';

const Landing: React.FC = () => {
  const [connections, setConnections] = useState(0);
  const navigation = useNavigation();

  useFocusEffect(() => {
    api
      .get('connections')
      .then((response) => setConnections(response.data.total))
      .catch(console.log);
  });

  function handleNavigateToGiveClasses() {
    navigation.navigate('GiveClasses');
  }

  function handleNavigateToStudy() {
    navigation.navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudy}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigateToGiveClasses}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {connections} conexões já realizadas{' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
};

export default Landing;
