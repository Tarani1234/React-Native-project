import Mybutton from '@/Components/Mybutton';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function TaskManager() {
    const navigate = useNavigation();
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompleted = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <View style={styles.container}>
       <Button title="← Back" onPress={() => navigate.goBack()} />
      <Text style={styles.heading}>Task Manager</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add" onPress={addTask} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskRow}>
            <TouchableOpacity onPress={() => toggleTaskCompleted(item.id)}>
              <Text style={[styles.taskText, item.completed && styles.completedTask]}>
                {item.text}
              </Text>
            </TouchableOpacity>

            <Button title="Delete" onPress={() => deleteTask(item.id)} color="red" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, marginTop : 30 },
  inputRow: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 10, marginRight: 10, borderRadius: 4 },
  taskRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomColor: '#eee', borderBottomWidth: 1 },
  taskText: { fontSize: 18 },
  completedTask: { textDecorationLine: 'line-through', color: 'gray' },
});
