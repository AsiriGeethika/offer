import React, { Component } from 'react';
import { StyleSheet,Text,View,TouchableOpacity,Image} from 'react-native';

class tab extends Component {
  static navigationOptions =
  {
    header: null,
  };

  render() {
    return (
        <View style={styles.container}>
            <Text>About Us</Text>
        </View>
    );
  }
}
export default tab;

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  }
});
