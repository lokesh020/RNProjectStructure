import React from 'react'
import { View, Text , StyleSheet } from 'react-native'


function TrendingScreen() {
    return (
        <View style = {styles.container}>
            <Text>TrendingScreen</Text>            
        </View>
    )
}

export default TrendingScreen

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:"center",
        alignItems:"center"
    },

})