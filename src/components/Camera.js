import React from 'react';
import { Text, View, Button} from 'react-native';
import { Header, LanguageSelectors} from './index'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default function Camera({navigation: {navigate}}) {
  const { container } = styles;

    return (
      <View style={container}>
        <Header headerText={'Subheader'} />
        <LanguageSelectors />
        <Text>CAMERA</Text>
        <Button title="take photo and nav to card" onPress={() => navigate('CardHolder')} />
      </View>
    );
  }

