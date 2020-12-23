import React from 'react';
import {Text} from 'react-native';

const HelloWorld = ({name,style}) => <Text style={{...style}}>Hello World {name}!</Text>;

export default HelloWorld;