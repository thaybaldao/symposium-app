import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from '../../assets/icon.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    marginBottom: 10
  },
  inputView:{
    width:"80%",
    backgroundColor:"#f2d0d0",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#560707"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#560707",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  signupText:{
    color:"#560707"
  }
});

const SignUpScreen = ({ onSignUp }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordAgain, setPasswordAgain] = React.useState('');
  return (
    <View style={styles.container}>
     <Image source={Icon} style={styles.image} />
     <View style={styles.inputView} >
       <TextInput
         style={styles.inputText}
         placeholder="Email"
         onChangeText={email => setEmail(email)}
      />
     </View>
     <View style={styles.inputView} >
       <TextInput
         secureTextEntry
         style={styles.inputText}
         onChangeText={password => setPassword(password)}
         placeholder="Senha"/>
     </View>
     <View style={styles.inputView} >
       <TextInput
         secureTextEntry
         style={styles.inputText}
         onChangeText={passwordAgain => setPasswordAgain(passwordAgain)}
         placeholder="Senha Novamente"/>
     </View>
     <TouchableOpacity style={styles.loginBtn} onPress={onSignUp(email, password)} >
       <Text style={styles.loginText}>CADASTRAR</Text>
     </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
