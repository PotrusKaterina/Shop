import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import RootNavigation from './app/navigation/rootNavigation';
import {store} from './app/store/index';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
