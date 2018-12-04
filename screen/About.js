import React, { Component } from 'react';
import { StyleSheet,Text,ScrollView,TouchableOpacity,Button,ImageBackground,View} from 'react-native';
import Header from './Header';

class About extends Component {
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
  cont:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  banner:{
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',  
  },
  txt1:{
    fontFamily: 'Cochin',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  txt2:{
    fontFamily: 'Cochin',
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
  btn1:{
    shadowColor: '#ffccbc',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius:3,
    elevation:1,
    alignSelf:'center',
    padding: 10,
    backgroundColor: 'rgba(151, 163, 168,0.8)',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,

  },
  buttonText:{
    fontFamily: 'Cochin',
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  contain :{
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor :'#0B0943',
    padding: 5,

  },
  btnn:{
    width: '33%',
    padding: 10,
    backgroundColor: '#33b5e5',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#000000',
  },
  buttonText1:{
    fontFamily: 'Cochin',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
  }
});
