import 'react-native-gesture-handler';
import React from 'react';
import {View,Text} from 'react-native';
import {HelloWorld} from '_atoms';
import {Typography} from '_styles';
import UserModel from '../src/models/UserModel'

const App = () => {
  const userModel = new UserModel({username:"Lokesh The Developer"})
  return  (
    <View style = {{justifyContent:"center",alignItems:"center", flex:1}}>
      <HelloWorld name = {userModel.username} style = {{fontSize: Typography.FONT_SIZE_16}}/>
    </View>
  )
} 

export default App;