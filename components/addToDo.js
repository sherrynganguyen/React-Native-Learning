import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddToDo({ submitHandler }) {
  const [text, setText] = useState('')

  const changeHandler = (text) => {
    setText(text)
  }
  return (
    <View style={styles.addItem}>
      <TextInput style={styles.input}
        placeholder="New To Do Item"
        value={text}
        onChangeText={changeHandler}
      />
      <Button
        title="+"
        color="#ffb3ba"
        onPress={() => submitHandler(text)}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  addItem: {
    padding: 16,
    marginTop: 16,
    borderColor: '#efefef',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: "#fddfe2"
  },
  input: {
    marginBottom: 10,
    fontSize: 15,
  }
});
