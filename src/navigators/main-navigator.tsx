import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { MovieDetails, MoviesList } from "../screens"
import { SCREENS } from "./screens";
import { Movie } from "../models/http/getMovies";

export type PrimaryParamList = {
    moviesList: undefined
    movieDetails: { movie: Movie }
}

const Stack = createStackNavigator<PrimaryParamList>()

export function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name={SCREENS.moviesList}
          component={MoviesList}
          options={{title: "Movies"}}
      />
      <Stack.Screen
          name={SCREENS.movieDetails}
          component={MovieDetails}
          options={{title: "Movie details"}}
      />
    </Stack.Navigator>
  )
}
