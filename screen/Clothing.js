import React, { Component } from 'react';
import { StyleSheet,Text,ScrollView,TouchableOpacity,Button,ImageBackground,View} from 'react-native';
import Header from './Header';

class Clothing extends Component {
  static navigationOptions =
  {
    header: null,
  };
  constructor(props){
    super(props);
    this.state = {
        text: ''
    };
}

  render() {
    var data = [["Clothing","Hotels","Financial","Mobile Services","Other"]];
    return (
    <ScrollView style={styles.container1}>
        <Header/>
        <ImageBackground source={require('../img/ww.jpg')} style={styles.banner}>
        <View style={styles.container}>
          
        </View>
      </ImageBackground>
    </ScrollView>   
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',  
  },
  container:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ffccbc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius:3,
    elevation:1,
    alignSelf:'center',
    padding: 25,
    backgroundColor: 'rgba(151, 163, 168,0.5)',
    marginBottom: 50,
    marginTop: 50,
  },

  banner:{
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',  
  },

});
