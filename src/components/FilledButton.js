import React from 'react'
import {StyleSheet,Text,TouchableOpacity} from 'react-native';

function FilledButton({title,style,onPress,textStyle}) {
    return (
        <TouchableOpacity style = {[styles.container,style]} onPress = {onPress}>
            <Text style = {[styles.text,textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default FilledButton

const styles = StyleSheet.create({
    container : {
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        padding:20,
        borderRadius:8,
        backgroundColor:'tomato'
    },
    text : {
        color:'white',
        fontWeight:"500",
        fontSize:18
    }
})