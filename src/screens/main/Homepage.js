import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import envVars from '../../../env';

export function Homepage({ navigation }) {


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>Homepage</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: envVars.color.background
  }
});