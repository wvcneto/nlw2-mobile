import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Landing');
  }

  return (
    <>
      <View style={styles.component}>
        <View style={styles.topBar}>
          <BorderlessButton onPress={handleGoBack} >
            <Image source={backIcon} resizeMode="contain" />
          </BorderlessButton>
          <Image source={logoImg} resizeMode="contain" />
        </View>

        <Text style={styles.title}>{ props.title }</Text>
      </View>
    </>
  );
}

export default PageHeader;
