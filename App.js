import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { getUserData } from './src/components/storage';
import { MainNavigator } from './src/navigation/MainNav';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import envVars from './env';
import { AuthNavigator } from './src/navigation/AuthNav';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  async componentDidMount() {
    
    console.log("\n".repeat(2));
    console.log("\u001b[1;32m" + "-".repeat(50));
    console.log("\u001b[1;32m" + "WELCOME TO CLIMVINO APP");
    console.log("\u001b[1;32m" + "USER NAME: ", await getUserData('userName'));
    console.log("\u001b[1;32m" + "-".repeat(50));
    console.log("\n".repeat(2));

    getUserData("userId").then((data) => {
      this.setState({ signedIn: data, checkedSignIn: true })
    })
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return (
        <View style={{ flex: 1, backgroundColor: envVars.color.background }}>
          <StatusBar style="light" />
        </View>
      );
    }
    else if (signedIn) {
      return (
          <NavigationContainer theme={{ colors: { background: envVars.color.background } }}>
            <MainNavigator />
          </NavigationContainer>);
    } else {
      return (
          <NavigationContainer theme={{ colors: { background: envVars.color.background } }}>
            <AuthNavigator />
          </NavigationContainer>);
    }
  }
}