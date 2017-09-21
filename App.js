import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera, Header, LanguageSelectors } from './src/components'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Subheader'} />
        <LanguageSelectors />
        <Camera />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

