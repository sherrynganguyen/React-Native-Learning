import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.key)}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#efefef',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: "#fddfe2"
  }
});