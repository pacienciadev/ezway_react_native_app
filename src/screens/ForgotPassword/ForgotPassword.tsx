import * as React from 'react';
import {Image, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import EzwayLogoHero from '../../assets/vertical_logo_componentezway_hero.png';
import {RootStackParamList} from '../../types';

import {styles} from './styles';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export const ForgotPasswordScreen: React.FC<Props> = ({navigation}: any) => {
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.sectionLogoHero}>
        <Image style={styles.logoHero} source={EzwayLogoHero} />
      </View>

      <View style={styles.sectionHorizontal}>
        <Text style={{textAlign: 'center', fontSize: 16, margin: 12}}>
          Digite o e-mail associado à sua conta abaixo para recuperar a senha
        </Text>

        <TextInput
          mode="outlined"
          label="E-mail"
          value={email}
          onChangeText={emailValue => setEmail(emailValue)}
        />
      </View>

      <View style={{...styles.sectionHorizontal, marginTop: 22}}>
        <Button
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate('Home')}
          contentStyle={{flexDirection: 'row-reverse'}}>
          Solicitar recuperação de senha
        </Button>

        <Button
          icon="arrow-left"
          mode="text"
          onPress={() => navigation.goBack()}
          style={{marginTop: 22}}>
          Voltar
        </Button>
      </View>
    </View>
  );
};
