import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera, Header, LanguageSelectors, CardHolder } from './src/components'
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Camera: {screen: Camera},
  CardHolder: {screen: CardHolder}
});

export default App;
