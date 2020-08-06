import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBackgroundImg from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <>
      <View style={styles.container}> 
        <ImageBackground 
          source={giveClassesBackgroundImg} 
          resizeMode="contain" 
          style={styles.content}
        >
          <Text style={styles.title}>
            Quer ser um Proffy?
          </Text>
          <Text style={styles.description}>
            Para começar, você precisa se cadastrar como profssor na nossa plataforma web.
          </Text>
        </ImageBackground>
        <RectButton onPress={handleNavigateBack} style={styles.okButton}>
          <Text style={styles.okButtonText}>Vamos la!</Text>
        </RectButton>
      </View>
    </>
  );
}

export default GiveClasses;