import 'react-native-gesture-handler';
import React from 'react';
import {View,Text} from 'react-native';
import {HelloWorld} from '_atoms';
import {Typography} from '_styles';

const App = () => (
  <View style = {{justifyContent:"center",alignItems:"center", flex:1}}>
    <HelloWorld name = "Lokesh Jangid" style = {{fontSize: Typography.FONT_SIZE_16}}/>
  </View>
);

export default App;