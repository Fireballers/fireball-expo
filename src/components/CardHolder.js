import React from 'react';
import { Text, View, Button } from 'react-native';
import { Card } from './index'
import { StackNavigator } from 'react-navigation';
import { Header, LanguageSelectors} from './index'

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};


function CardHolder({navigation: {navigate}}) {
  const { viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Header headerText={'Subheader'} />
      <LanguageSelectors />
      <Text>CARDHOLDER</Text>
      <Button title="back to camera" onPress={() => navigate('Camera')} />
      <Card />
    </View>
  );
}

const CardScreen = StackNavigator({
  CardHolder: {screen: CardHolder}
});

export default CardScreen;
