import React from 'react';
import { Provider } from "react-redux";
import { RootNavigator } from "./src/navigators/root-navigator";
import store from "./src/models/configureStore";

export default function App() {
  return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
  );
}
