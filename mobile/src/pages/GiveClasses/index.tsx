import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';

import giveClassesBg from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBg}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={navigation.goBack}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
