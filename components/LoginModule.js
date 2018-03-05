
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';


var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

export default class LoginModule extends Component {
  
    constructor(props){
      super(props);
    }

    state = {
      username: '',
      password: '',
    }

  _onPressButton = () => {
    const { username, password } = this.state
    //Alert.alert('You tapped the button!')
    Alert.alert(username + password)
  };


  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.loginText}>LOGIN</Text>
            <Text style={styles.heading}>Email:</Text>
            <TextInput
              style={styles.textInputStyleEmail}
              placeholder="Enter Email id"
              underlineColorAndroid = '#5F6C77'
              returnKeyLabel = {"next"}
              backgroundColor = '#A4B3C1'
              autoCapitalize = {"none"}
              autoCorrect= {false}
              multiline={true}
              value={this.state.username}
              onChangeText={username => this.setState({username})}
              //onSubmitEditing={this.refs.passwordInput.focus}
              onSubmitEditing = {this._onPressButton}
            />
            
            <Text style={styles.heading}>Password:</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Enter Password"
              underlineColorAndroid = '#5F6C77'
              backgroundColor = '#A4B3C1'
              returnKeyLabel = {"next"}
              autoCapitalize = {"none"}
              secureTextEntry= {true}
              autoCorrect= {false}
              ref={ref => (this.passwordInput = ref)}
              value={this.state.password}
              onChangeText={password => this.setState({password})}
              onSubmitEditing={this._onPressButton}
            />
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableHighlight>
          </View>  
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height:deviceHeight,
    width:deviceWidth,
    backgroundColor: '#212F3D',
    borderRadius: 25,
  },
  innerContainer: {
    height:deviceHeight/1.25,
    width:deviceWidth/1.25,
    backgroundColor:'#34495E',
    borderRadius: 25,
  },
  loginText:{
    fontSize:20,
    fontWeight:'bold',
    paddingTop:50,
    textAlign:'center',
    fontFamily: 'Cochin',
  },
  textInputStyle:{
    fontSize:19,
    width:deviceWidth/1.5,
    height:25,
    marginTop:20,
    marginLeft:20,
    borderRadius: 25,
    textAlign:'center',
    fontFamily:'Cochin',
    fontWeight:'bold',
    color:'#3E4A55',
  },
  textInputStyleEmail:{
    fontSize:19,
    width:deviceWidth/1.5,
    marginTop:20,
    marginLeft:20,
    borderRadius: 25,
    textAlign:'center',
    fontFamily:'Cochin',
    fontWeight:'bold',
    color:'#3E4A55',
  },
  heading:{
    fontSize:20,
    fontFamily:'Cochin',
    textAlign:'center',
    paddingTop:50,
    color:'#A6BBCE'
  },
  button:{
    marginBottom: 30,
    marginTop:35,
    marginLeft:50,
    width: 200,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#212F3D'
  },
  buttonText:{
    padding: 20,
    color: 'white',
    fontFamily:'Cochin',
    fontSize:30
  }

});