import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/header';
import ToDoItem from './components/toDoItem';
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
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* to form */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
