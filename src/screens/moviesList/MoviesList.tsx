import React, {FC} from "react"
import {View, Text, SafeAreaView, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import {SCREENS} from "../../navigators/main-navigator";

export const MoviesList: FC  = (): React.ReactElement => {
    const navigation = useNavigation();
    return (
        <SafeAreaView testID="WelcomeScreen" style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate(SCREENS.movieDetails)}>
                <Text> go to next page </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
