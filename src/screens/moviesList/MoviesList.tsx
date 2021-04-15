import React, {FC, useEffect} from "react"
import {View, Text, SafeAreaView, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { SCREENS } from "../../navigators/screens";
import {useDispatch, useSelector} from "react-redux";
import { getMovies } from "../../models/reducers/moviesReducer";
import {rootStoreState} from "../../models/reducers/types";

export const MoviesList: FC  = (): React.ReactElement => {
    const { movies } = useSelector((state: rootStoreState) => state.moviesReducer );
    const navigation = useNavigation();
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(movies)
    }, [movies])
    return (
        <SafeAreaView testID="WelcomeScreen" style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREENS.movieDetails)}>
                <Text> go to next page </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(getMovies())}>
                <Text> getMoviews </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
