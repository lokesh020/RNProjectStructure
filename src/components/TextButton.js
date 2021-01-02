import React from 'react'
import {StyleSheet,Text,TouchableOpacity} from 'react-native';

function TextButton({title,style,onPress,textStyle}) {
    return (
        <TouchableOpacity style = {[styles.container,style]} onPress = {onPress}>
            <Text style = {[styles.text,textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextButton

const styles = StyleSheet.create({
    container : {
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        padding:20,
        borderRadius:8,
    },
    text : {
        color:'tomato',
        fontWeight:"500",
        fontSize:15
    }
})