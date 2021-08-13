import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigation from './app/navigation/rootNavigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;
