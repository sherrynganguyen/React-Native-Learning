import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color={'#333'}/>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: '#efefef',
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: "#fddfe2"
  },
  itemText: {
    marginLeft: 5,
  }

});