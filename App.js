import React, { Component } from 'react';
import { Text } from 'react-native';
import HomeScreen from './src/views/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

class App extends Component {
  render() {
    return (
      <SafeAreaView edges={['right', 'bottom', 'left']}>
        <HomeScreen/>
      </SafeAreaView>
    );
  }
}

export default App;