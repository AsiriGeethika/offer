import React, { Component } from 'react';
import { StyleSheet,Text,ScrollView,TouchableOpacity,Button,ImageBackground,View} from 'react-native';
import Head from './Header';
import Content from './Content';
import DropdownMenu from 'react-native-dropdown-menu';


class HomeScreen extends Component {
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
        <Head/>
        <ImageBackground source={require('../img/ww.jpg')} style={styles.banner}>
        <View style={styles.container}>
          <Text style={styles.txt1}>Sign in with OfferMe</Text>
          <Text style={styles.txt2}>We can personalize your OfferMe experience</Text>
          <View style={styles.cont}>   
            <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Signin')}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Reg')}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.contain}>
        <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonText1}>Home</Text>
        </TouchableOpacity>
        <View style={{flex:2}}>
             <View style={{height: 64}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}>
        </DropdownMenu>

        </View>
        <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('About')}>
            <Text style={styles.buttonText1}>About Us</Text>
        </TouchableOpacity>

        </View>
        <Content/>
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
