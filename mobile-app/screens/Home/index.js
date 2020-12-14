import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Clock from './Clock';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Clock />
    </View>
  );
};

export default Home;
