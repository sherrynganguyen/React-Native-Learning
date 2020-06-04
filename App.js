import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/header';
export default function App() {
  const [tasks, setTasks] = useState([
    { text: 'Learn Japanese', key: '1' },
    { text: 'Work Out', key: '2' },
    { text: 'Learn Coding', key: '3' },
    { text: 'Learn Ukelele', key: '4' }
  ]);
  return (
    <View style={styles.container}>
      {/* header */}
      <Header/>
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
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
