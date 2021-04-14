import React from 'react';
import { StyleSheet } from 'react-native';
import { RootNavigator } from "./src/navigators/root-navigator";
import store from "./src/models/configureStore";
import {Provider} from "react-redux";

export default function App() {
  return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
