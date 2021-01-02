import React from 'react'
import { View, Text , StyleSheet } from 'react-native'
import {SafeAreaView } from 'react-native-safe-area-context';

import {Colors} from '_styles'
import Input from "_components/Input";
import FilledButton from "_components/FilledButton";
import TextButton from "_components/TextButton";

function LoginScreen({navigation}) {

    function onLoginPress() {
        navigation.navigate('AppStackNav')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style = {styles.container}>
               <Text style={{fontSize:32,color:Colors.BLACK,marginBottom:46}}>LOGIN</Text>
                <Input style = {styles.input} placeholder = {"Email"} keyboardType = "email-address"/>
                <Input style = {styles.input} placeholder = {"Password"} secureTextEntry/>
                <FilledButton title = {"LOGIN"} style={styles.loginButton} onPress = {()=>{onLoginPress()}} />
                <TextButton title = {"Haven't you an account? create one"} 
                            onPress = {()=>{}} />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex:1, 
        paddingTop: 100,
        alignItems:"center",
        padding:20
    },
    input : {
        marginVertical:8,
        backgroundColor:"#e8e8e8",
        borderRadius : 8
    },
    loginButton:{
        marginVertical:32
    }

})