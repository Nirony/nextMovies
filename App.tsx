import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RootNavigator} from "./src/navigators/root-navigator";

export default function App() {
  return (
      <RootNavigator/>
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
