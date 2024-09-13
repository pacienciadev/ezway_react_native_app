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

export const RegisterScreen: React.FC<Props> = ({navigation}: any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.sectionLogoHero}>
        <Image style={styles.logoHero} source={EzwayLogoHero} />
      </View>

      <View style={styles.sectionHorizontal}>
        <Text style={{textAlign: 'center', fontSize: 16, margin: 12}}>
          Criar nova conta
        </Text>

        <TextInput
          mode="outlined"
          label="E-mail"
          value={email}
          onChangeText={emailValue => setEmail(emailValue)}
        />

        <TextInput
          mode="outlined"
          label="Senha"
          value={password}
          onChangeText={passwordValue => setPassword(passwordValue)}
          secureTextEntry={true}
        />

        <TextInput
          mode="outlined"
          label="Confirmar Senha"
          value={confirmPassword}
          onChangeText={confirmPasswordValue =>
            setConfirmPassword(confirmPasswordValue)
          }
          secureTextEntry={true}
        />
      </View>

      <View style={{...styles.sectionHorizontal, marginTop: 22}}>
        <Button
          icon="account-plus"
          mode="contained"
          onPress={() => navigation.navigate('Home')}
          contentStyle={{flexDirection: 'row-reverse'}}>
          Criar nova conta
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
