import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';

class App extends Component{
    
    render(){
        const { newValue } = this.props.clickButton(8);
        return(
            <View>
                <Text style={styles.textStore}>
                    Studing React-Native
                </Text>
            </View>
        )
    }
}
