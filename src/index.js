import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import Display from './components/Display';

export default class App extends Component{
    
    render(){
        return(
            <View>
                <Display />
            </View>
        )
    }
}
