import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from '../../assets/icon.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2d0d0',
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
    backgroundColor:"#FFF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50
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
    marginTop: 10,
    color:"#560707"
  }
});

const SignInScreen = ({ onSignIn, navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
       <Image source={Icon} style={styles.image} />
       <View style={styles.inputView} >
         <TextInput
           style={styles.inputText}
           placeholder="Email"
           value={email}
           onChangeText={setEmail}
        />
       </View>
       <View style={styles.inputView} >
         <TextInput
           secureTextEntry
           style={styles.inputText}
           placeholder="Senha"
           value={password}
           onChangeText={setPassword}
        />
       </View>
       <TouchableOpacity style={styles.loginBtn} onPress={onSignIn}>
         <Text style={styles.loginText}>LOGIN</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
         <Text style={styles.signupText}>Não possui conta? Cadastre-se!</Text>
       </TouchableOpacity>
     </View>
  );
};

export default SignInScreen;
