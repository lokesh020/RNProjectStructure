import React from 'react'
import {StyleSheet,Text,TextInput} from 'react-native';

function Input({style,...props}) {
    return (
        <TextInput {...props} style = {[styles.input,style]} autoCorrect = {false}/>
    )
}

export default Input

const styles = StyleSheet.create({
    input : {
        width : "100%",
        padding:20,
    }
})