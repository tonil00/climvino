import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import envVars from '../../../env';

export function Introduction({ navigation }) {


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={{resizeMode: "contain", alignSelf: "center", width: "100%", height: "30%"}}
        source={require('../../../assets/images/img-introduction.png')}
      />
      <Text>Introduction</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: envVars.color.background
  }
});