import React, {FC, useEffect, Fragment, useState} from "react"
import {View, Text, SafeAreaView, TouchableOpacity, FlatList} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { SCREENS } from "../../navigators/screens";
import {useDispatch, useSelector} from "react-redux";
import { getMovies } from "../../models/reducers/moviesReducer";
import { rootStoreState } from "../../models/reducers/types";
import {MoviesContainer} from "./components/MoviesContainer";
import {CustomInput} from "../../components/CustomInput";

export const MoviesList = (): React.ReactElement => {
    const { movies } = useSelector((state: rootStoreState) => state.moviesReducer );
    const dispatch = useDispatch();
    const [ query, setQuery ] = useState('');
    useEffect(() => {
        dispatch(getMovies());
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
           <CustomInput placeHolder={'search by title or year '} onSubmit={setQuery}/>
           <MoviesContainer query={query}/>
        </SafeAreaView>
    )
}
