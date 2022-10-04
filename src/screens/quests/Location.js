import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import envVars from '../../../env';

export function Location({ navigation }) {


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>Location Type Quest</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: envVars.color.background
  }
});