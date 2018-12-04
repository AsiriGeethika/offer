import React, { Component } from 'react';
import { StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default class Tab extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }

  render() {
      var data = [["Clothing","Hotels","Financial","Mobile Services","Other"]];
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  contain :{
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnn:{
    alignSelf:'center',
    padding: 10,
    backgroundColor: 'rgba(230,178,126,0.8)',
    marginBottom: 15,
  },

});
