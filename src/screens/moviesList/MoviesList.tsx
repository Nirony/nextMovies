import React, {FC, useEffect, useState} from "react"
import { SafeAreaView } from "react-native"
import { useDispatch } from "react-redux";
import { getMovies } from "../../models/reducers/moviesReducer";
import { MoviesContainer } from "./components/MoviesContainer";
import { CustomInput } from "../../components/CustomInput";

export const MoviesList: FC = (): React.ReactElement => {
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
