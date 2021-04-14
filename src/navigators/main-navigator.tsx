import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { MovieDetails, MoviesList } from "../screens"
import { SCREENS } from "./screens";

export type PrimaryParamList = {
    moviesList: undefined
    movieDetails: { title: string } // todo: change params as needed
}

const Stack = createStackNavigator<PrimaryParamList>()

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREENS.moviesList} component={MoviesList} />
      <Stack.Screen name={SCREENS.movieDetails} component={MovieDetails} />
    </Stack.Navigator>
  )
}
