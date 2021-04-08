import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://github.com/zTaaso.png',
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Thiago Afonso</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>Studying Web Development! 👨‍💻</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          {' '}
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$20,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorite]}>
            {/* <Image source={heartOutLineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
