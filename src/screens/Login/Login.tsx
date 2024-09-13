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

export const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.sectionLogoHero}>
        <Image style={styles.logoHero} source={EzwayLogoHero} />
      </View>

      <View style={styles.sectionHorizontal}>
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
      </View>

      <View style={styles.pairActionButtons}>
        <Button mode="text" onPress={() => navigation.navigate('Register')}>
          Criar nova conta
        </Button>

        <Button
          mode="text"
          onPress={() => navigation.navigate('ForgotPassword')}>
          Esqueceu a senha?
        </Button>
      </View>

      <View style={styles.sectionHorizontal}>
        <Button
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate('Home')}
          contentStyle={{flexDirection: 'row-reverse'}}>
          Entrar
        </Button>

        <Text style={{alignSelf: 'center', paddingVertical: 14}}>Ou</Text>

        <Button
          icon="google"
          mode="contained"
          buttonColor="#DE4848"
          onPress={() => console.log('Pressed => Esqueceu a senha?')}
          contentStyle={{flexDirection: 'row-reverse'}}>
          Usar conta do Google
        </Button>
      </View>
    </View>
  );
};
