import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.appname}>ToDo App</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 25,
    backgroundColor: '#ffb3ba',
  },
  appname: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  }

});