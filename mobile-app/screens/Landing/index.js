import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Logo from '../../assets/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 300,
    height: 260,
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 8,
    margin: 8,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10,
  },
  btn:{
    backgroundColor:"#560707",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  btnText:{
    color:"white",
    fontSize: 16
  }
});

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}></View>
      <View style={styles.middleContainer}>
        <Image source={Logo} style={styles.image} />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;
