import React from 'react'
import { View, Text , StyleSheet } from 'react-native'


function SettingsScreen() {
    return (
        <View style = {styles.container}>
            <Text>SettingsScreen</Text>            
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:"center",
        alignItems:"center"
    },

})