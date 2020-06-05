import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import { clickButton } from './actions';
import { bindActionCreators } from 'redux';

class App extends Component{
    
    render(){
        const { newValue } = this.props.clickButton(8);
        return(
            <View>
                <Text style={styles.textStore}>
                    {newValue}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = store => ({
    newValue: store.clickState.newValue
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({clickButton}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
    textStore : {
        fontSize: 50,
        marginTop: Dimensions.get('window').height / 3,
        alignSelf: 'center'
    }
})