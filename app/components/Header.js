import React, { Component } from 'react';
import { StyleSheet,Button,Icon,Text,View,Image} from 'react-native';
import { PropTypes } from 'prop-types';

class Header extends Component {
  static navigationOptions =
  {
    header: null,
  };

  render() {
    const { title, openDrawer, iconName,leftPress, type,iconNameRight } = this.props;
    const rightIcon = type==='sub'? 
       <Icon      
           name={iconNameRight}
           style={{fontSize: 23, color: '#ffffff'}} 
       /> :
       <Button
       transparent
       // onPress={() => this.props.navigation.navigate("DrawerOpen")}
       // onPress={() => this.props.navigation.openDrawer()}
       onPress={openDrawer}
       // onPress={() => navigation.openDrawer()}>

       >
       <Icon name="menu" />
   </Button>

    return (
      <View>
      <Left>
        {/* <Button
          transparent
          // onPress={() => this.props.navigation.navigate("DrawerOpen")}
          // onPress={() => this.props.navigation.openDrawer()}
          onPress={openDrawer}
          // onPress={() => navigation.openDrawer()}>
>
          <Icon name="menu" />
                        </Button> */}
                        {/* <Button> */}
                            <Icon                            
                                // name="md-notifications"
                                onPress={leftPress}
                                name={iconName}
                                style={{fontSize: 23, color: '#ffffff'}} 
                            />
                        {/* </Button> */}
                    </Left>
                    <Body>
                        <Title>{title}</Title>
                    </Body>
                    <Right>
                        {rightIcon}
                        {/* <Button
                            transparent
                            onPress={openDrawer}
                            >
                            <Icon name="menu" />
                        </Button> */}
                    </Right>
    <View style={styles.header}>
      <Image source={require('../img/cart1.png')} style = {styles.img1}  />
      <Text style={styles.txt}>Offer Me</Text>     
    </View>   
    </View>
    );
  }
}


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
