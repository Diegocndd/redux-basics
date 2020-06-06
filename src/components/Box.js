import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Box extends Component{

    render(){
        const {newValue} = this.props;
        return(
            <View><Text style={styles.phraseBox}>Você selecionou o número {newValue}</Text></View>
        )
    }
}

const mapStateToProps = store => ({
    newValue: store.changeNumber.newValue
})

export default connect(mapStateToProps)(Box)

const styles = StyleSheet.create({
    phraseBox : {
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 250
    }

})
