import React, {FC} from "react"
import { SafeAreaView, StyleSheet} from "react-native"
import { RouteProp } from "@react-navigation/native"
import { PrimaryParamList } from "../../navigators/main-navigator";
import { SCREENS } from "../../navigators/screens";
import { Avatar, ListItem } from "react-native-elements";

type movieDetailsScreenRouteProps = RouteProp<PrimaryParamList, SCREENS.movieDetails>
interface Props {
    route: movieDetailsScreenRouteProps
}

export const MovieDetails: FC<Props> = (props: Props): React.ReactElement => {

    debugger
    const { title, largeimage, released, download, rating, synopsis } = props.route.params.movie;

    return (
        <SafeAreaView>
            <ListItem>
                <ListItem.Content style={styles.container}>
                    <Avatar size={'xlarge'} source={{ uri: largeimage }}/>
                    <ListItem.Title style={styles.rowContainer}>{title}</ListItem.Title>
                    <ListItem.Subtitle style={styles.rowContainer}>{ `Synopsis:\n${synopsis}` }</ListItem.Subtitle>
                    <ListItem.Subtitle style={styles.rowContainer}>{ `released:\n${released}` }</ListItem.Subtitle>
                    <ListItem.Subtitle style={styles.rowContainer}>{ `rating:\n${rating}` }</ListItem.Subtitle>
                    <ListItem.Subtitle style={styles.rowContainer}>{ `download:\n${download}` }</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5
    },

});
