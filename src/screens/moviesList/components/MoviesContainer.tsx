import React, { useEffect, useState } from "react"
import { SafeAreaView, TouchableOpacity, FlatList, StyleSheet, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { SCREENS } from "../../../navigators/screens";
import { useSelector } from "react-redux";
import { rootStoreState } from "../../../models/reducers/types";
import { Avatar, ListItem } from "react-native-elements";
import { Movie } from "../../../models/http/getMovies";

interface Props {
    query: string
}

export const MoviesContainer= ({ query }: Props): React.ReactElement => {
    const { movies } = useSelector((state: rootStoreState) => state.moviesReducer );
    const [sortedMoviesList, setSortedMoviesList] = useState([] as Movie[])
    const navigation = useNavigation();

    useEffect(() => {
        setSortedMoviesList(movies);
    },[movies]);

    useEffect(() => {
        filterMoviesByQuery()
    }, [query])

    const filterMoviesByQuery = () => {
        const newMoviesList = movies.filter((value, index) => {
            return(
                value.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
                ||  value.released.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            )
        })
        setSortedMoviesList(newMoviesList);
    }

    if (sortedMoviesList.length === 0) return <Text> {'No movies match your search'}</Text>
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={sortedMoviesList}
                keyExtractor={(movie, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.movieDetails)}>
                            <ListItem key={index} bottomDivider>
                                <ListItem.Content style={styles.rowContainer}>
                                    <Avatar source={{ uri: item.image }}/>
                                    <View style={{ paddingHorizontal: 10 }}>
                                        <ListItem.Title>{item.title}</ListItem.Title>
                                        <ListItem.Subtitle>{ item.released }</ListItem.Subtitle>
                                    </View>
                                </ListItem.Content>
                            </ListItem>
                        </TouchableOpacity>
                    )}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

});
