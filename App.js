/*
  A Random Number Generator between 1 to 100
*/

//import component from react
import React, { Component } from 'react';
 
//import StyleSheet, View, StatusBar, Button and Text from react-native
import { 
  StyleSheet, 
  View, 
  StatusBar,
  Button,
  Text } from 'react-native';
 
// class
export default class MyProject extends Component {
 
  constructor(){
 
    super();
 
    //created a State whose name is NumberHolder
    this.state={
 
      //default value
      NumberHolder : 1
 
    }
  }
 
//function that stores the number in NumberHolder State
GenerateRandomNumber=()=>
{
 
var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
 
this.setState({
 
  NumberHolder : RandomNumber
 
})
}
 
//render return part
  render() {
    return (
   
      <View style={styles.MainContainer} >
       <StatusBar
                backgroundColor="#663366"
                barStyle="light-content"
             />
       <Text style={styles.welcome}>Random Number Generator</Text>
 
       <Text style={{marginBottom: 90, fontSize: 50, color: '#fff', padding: 90}}>{this.state.NumberHolder}</Text>
 
       <Button title="Generate" onPress={this.GenerateRandomNumber} 
       color= "#993333"
       />
        
      </View>
 
    );
  }
}
 
//styling
const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#663366'
  },

   welcome: {
        fontSize: 36,
        textAlign: 'center',
        margin: 20,
        color: '#fff'
    }
 
});