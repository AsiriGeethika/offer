import React, { Component } from 'react';
import { StyleSheet,Text,View,Image} from 'react-native';


class Head extends Component {
  static navigationOptions =
  {
    header: null,
  };

  render() {
    return (
          
    <View style={styles.header}>
      <Image source={require('../img/cart1.png')} style = {styles.img1}  />
      <Text style={styles.txt}>Offer Me</Text>     
    </View>   
    )
  }
}

export default Head;


const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#33b5e5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
   
  },
  img1:{
    width:40,
    height:40
  },
  txt:{
    fontSize:35,
    marginLeft:10,
    fontWeight: "600",
    fontStyle: 'italic',
    color:'#fff'
  }

});
