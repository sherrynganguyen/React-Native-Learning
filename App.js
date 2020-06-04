import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/header';
import ToDoItem from './components/toDoItem';
import AddToDo from './components/addToDo';

export default function App() {
  const [tasks, setTasks] = useState([
    { text: 'Learn Japanese', key: '1' },
    { text: 'Work Out', key: '2' },
    { text: 'Learn Coding', key: '3' },
    { text: 'Learn Ukelele', key: '4' }
  ]);

  const pressHandler = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(task => task.key !== key)
    })
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTasks((prevTasks) => {
        return [
          { text:text, key: Math.random().toString() },
          ...prevTasks
        ]
      })
    } else {
      Alert.alert(
        'Oops!',
        'Todo must be over 3 characters long',
        [
          {
            text: 'Understood',
            onPress: () => console.log('alert closed')
          }
        ]
      )
    }
  };

  return (
    // <FlexBox/>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddToDo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
