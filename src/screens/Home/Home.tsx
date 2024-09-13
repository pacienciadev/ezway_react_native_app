import React from 'react';

import EzwayLogoHero from '../../assets/vertical_logo_component.png';

import {Image, StatusBar, useColorScheme, View} from 'react-native';

import {Avatar, Card, FAB, IconButton, Text} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {styles} from './styles';

const LeftContent = (props: {size: number}) => (
  <Avatar.Icon {...props} icon="folder" />
);

export function HomeScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{...styles.container, ...backgroundStyle}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <FAB
        icon="apps"
        style={styles.fab}
        label="Adicionar"
        variant="primary"
        onPress={() => console.log('Pressed')}
      />

      <View style={styles.customAppBar}>
        <Image style={styles.logoEzway} source={EzwayLogoHero} />

        <IconButton
          icon="cog"
          size={40}
          onPress={() => console.log('Pressed')}
        />
      </View>

      <View style={{...styles.sectionHorizontal, marginTop: 8}}>
        <Card>
          <Card.Title
            title="Rafael Eduardo"
            subtitle="Tecnical Administrator"
            left={LeftContent}
          />

          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}
