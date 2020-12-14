import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
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
    marginBottom:10,
    marginTop:10,
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
  },
  title:{
    fontWeight:"bold",
    fontSize:40,
    color:"#560707",
    marginBottom: 10
  },
  instructions:{
    fontSize:16,
    color:"#560707",
    width:"70%",
    textAlign: 'center',
  }
});

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold",fontSize:24,color:"#50010C", marginBottom: 15}}>CONTATO</Text>
       <Text style={styles.instructions}>Tem alguma dúvida?</Text>
       <Text style={[styles.instructions, {marginBottom: 10}]}>Envie uma mensagem!</Text>
       <View style={styles.inputView} >
         <TextInput
           style={styles.inputText}
           placeholder="Nome"
           value={name}
           onChangeText={name => setName(name)}
        />
       </View>
       <View style={styles.inputView} >
         <TextInput
           style={styles.inputText}
           placeholder="Email"
           value={email}
           onChangeText={email => setEmail(email)}
        />
       </View>
       <View style={styles.inputView} >
         <TextInput
           style={styles.inputText}
           placeholder="Mensagem"
           value={message}
           onChangeText={message => setMessage(message)}
        />
       </View>
       <TouchableOpacity style={styles.loginBtn}>
         <Text style={styles.loginText}>ENVIAR</Text>
       </TouchableOpacity>
     </View>
  );
};

export default Contact;
