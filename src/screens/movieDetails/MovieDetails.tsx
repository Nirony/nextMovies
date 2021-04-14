import React, {FC} from "react"
import {View, Text, SafeAreaView, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"

export const MovieDetails: FC  = (props): React.ReactElement => {
    const navigation = useNavigation()
    return (
        <SafeAreaView testID="WelcomeScreen" style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text> go back </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
