import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,TextInput,CheckBox,TouchableOpacity,ActivityIndicator,Dimensions,Modal} from 'react-native';

export default class Splash extends Component {
    static navigationOptions = {
        header: null
    }
   
    componentWillMount(){
        setTimeout(()=>{this.props.navigation.navigate('Home');
    },3000)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>OFFER ME</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor: '#303F9F',
        flex:1,
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
    
})