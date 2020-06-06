import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Button} from 'react-native';
import {connect} from 'react-redux';
import { incrementNumber, decrementNumber } from '../reduxControll/actions';
import { bindActionCreators } from 'redux';

class Display extends Component{

    render(){
        const {newValue} = this.props;
        return(
            <View>
            <View><Text style={styles.numberDisplay}>{newValue}</Text></View>
            <View><Button title="+" onPress={() => {this.props.incrementNumber(newValue)}}/></View> 
            <View style={styles.bottomButton} ><Button title="-" onPress={() => {this.props.decrementNumber(newValue)}}/></View>

            </View>
        )
    }


}

const mapStateToProps = store => ({
    newValue : store.changeNumber.newValue
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({incrementNumber, decrementNumber}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Display);

const styles = StyleSheet.create({
    numberDisplay : {
        alignSelf: 'center',
        fontSize: 60,
        marginTop: Dimensions.get('window').height / 3
    },
    bottomButton : {
        marginTop: 20
    }

});