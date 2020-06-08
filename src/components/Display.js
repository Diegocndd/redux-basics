import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image, ScrollView, Button} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nigthMode } from '../reduxControll/actions';

function styleText(textColor){
    return{
        fontSize: 17,
        textAlign: 'justify',
        marginTop: 15,
        color: textColor
    }
}

function styleTitle(titleColor){
    return{ 
    fontSize: 50,
    marginTop: 15,
    color: titleColor
    }
}

function styleBackground(){
    return{
        marginTop: Dimensions.get("window").height / 15,
        paddingHorizontal: 20,
        marginBottom: 20
    }
}

function styleContainer(backgroundColor){
    return{
        backgroundColor: backgroundColor
    }
}

function styleImage(){
    return{
        width: 370,
        height: 400,
        marginTop: 25
    }
}


class Display extends Component{

    render(){
        const {textValue, titleValue, backgroundValue} = this.props;
        
        return(
            <View style={styleContainer(backgroundValue)}>
            <ScrollView> 
            <View style={styleBackground()}>
                <Button title="MODO NOTURNO" onPress={()=> {this.props.nigthMode('NIGTH_MODE_SCREEN')}}/>
                <Text style={styleTitle(titleValue)}>Título</Text>
                <Text style={styleText(textValue)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Image style={styleImage()}source={require('../../img/nature.jpg')}/>
            </View>
            </ScrollView>
            </View>

        )
    }
}

const mapStateToProps = store => ({
    textValue : store.nigthMode.textValue,
    titleValue : store.nigthMode.titleValue,
    backgroundValue : store.nigthMode.backgroundValue
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({nigthMode}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Display);