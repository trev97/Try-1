import React, {Component } from 'react';
import {Text, View, Image, Button, Alert, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
class Blink extends Component {
  
  constructor(props)
  {
    super(props);
    this.state = { isShowingText: true};
    setInterval(() => (
      this.setState(previousState=>(
        {isShowingText: !previousState.isShowingText}
      ))
    ), 1000)
  }

  
  render()
  {
    
    if(!this.state.isShowingText)
    {
      return <Image style={{width  : 250, height : 250, alignSelf : "center"}} />;
    }
  
    return (
          <Image source =  {this.props.pic} style={{width  : 250, height : 250, alignSelf : "center"}} />
          //<Text>{this.props.text}</Text>
       
    );
  }
}

export default class HelloWorldApp extends Component {
  
  onTapWelcome(){
    Alert.alert("Welcome, you discovered this Easter Egg");

  }

  render()
  {

    let pic = {
      uri: 'http://static1.squarespace.com/static/53eba2e2e4b05704d2772946/t/53ebbd31e4b0907625442e8c/1551832055684/'
    };
    /*
    return(
      <View>
        <Image source = {pic} style = {{width  : 250, height : 250, alignSelf : "center"}}/>
        <Button
          title = "Welcome"
          onPress = {this.onTapWelcome}
        
        />
        
        <Blink text = "This is a quick Test"/>
      </View>
    );
    */
   return(
    <View>
      <Blink pic = {pic}/>
      <Button
        title = "Welcome"
        onPress = {this.onTapWelcome}
      
      />
      
      
    </View>
  );
  }


}
