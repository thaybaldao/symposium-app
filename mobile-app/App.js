import React from 'react';
import {
  NavigationContainer,
  DrawerActions,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import LandingScreen from './screens/Landing';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import HomeScreen from './screens/Home';
import EventsScreen from './screens/Events';
import ContactScreen from './screens/Contact';
import Icon from 'react-native-vector-icons/Feather';

import { Provider } from "react-redux";
import configureStore from "./redux/store";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
          activeTintColor: '#560707',
          inactiveTintColor: '#d25d5d',
      }}>
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="EVENTOS" component={EventsScreen} />
      <Tab.Screen name="CONTATO" component={ContactScreen} />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

const styles = StyleSheet.create({
  signOutBtn:{
    backgroundColor:"#560707",
    alignItems:"center",
    justifyContent:"center",
    margin:10,
    borderRadius:5,
  },
  signOutText:{
    color:"#FFFFFF",
    alignItems:"center",
    justifyContent:"center",
    margin:5
  }
});

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleSignIn = (email, password) => (event) => {
    // TODO implement real sign in mechanism
    console.log(email)
    console.log(password)

    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // TODO implement real sign out mechanism

    setIsAuthenticated(false);
  };

  const handleSignUp = (email, password) => (event) => {
    // TODO implement real sign up mechanism
    console.log(email)
    console.log(password)
    setIsAuthenticated(true);
  };

return (
  <Provider store={configureStore()}>
  <NavigationContainer>
    <RootStack.Navigator>
      {isAuthenticated ? (
        <RootStack.Screen
          name="Home"
          component={HomeTabs}
          options={({ route, navigation }) => ({
            headerTitle: '',
            headerRight: () => (
              <TouchableOpacity style={styles.signOutBtn} onPress={handleSignOut}>
                <Text style={styles.signOutText}>SAIR</Text>
              </TouchableOpacity>
            ),
          })}
        />
      ) : (
      <>
        <RootStack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Sign In" options={{ title: 'Login' }}>
          {(props) => (
            <SignInScreen {...props} onSignIn={handleSignIn} />
          )}
        </RootStack.Screen>
        <RootStack.Screen name="Sign Up" options={{ title: 'Cadastro' }}>
          {(props) => (
            <SignUpScreen {...props} onSignUp={handleSignUp} />
          )}
        </RootStack.Screen>
      </>
    )}
    </RootStack.Navigator>
  </NavigationContainer>
  </Provider>
  );
};

export default App;
