import React, { createRef, RefObject } from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { Input } from "react-native-elements"

interface Props{
    placeHolder: string,
    onSubmit: (text: string) => void
}

export const CustomInput = (props: Props) => {
    const inputRef: RefObject<any> = createRef()

    const getRightIcon = (): React.ReactElement => {
        return (
            <TouchableOpacity
                style={style.rightIcon}
                onPress={() => {
                    inputRef.current?.clear()
                    props.onSubmit('');
                }}
            >
                <Text>
                    {'X'}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <Input
            // @ts-ignore
            ref={inputRef}
            onSubmitEditing={(e) => props.onSubmit(e.nativeEvent.text)}
            onChangeText={props.onSubmit}
            rightIcon={getRightIcon()}
            leftIconContainerStyle={{}}
            rightIconContainerStyle={{}}
            placeholder={props.placeHolder}
        />
    )
}

const style = StyleSheet.create({
    rightIcon: {
        alignItems: 'center',
        borderRadius: 15,
        height: 25,
        justifyContent: 'center',
        width: 25,
        backgroundColor: '#fff'
    }
})
