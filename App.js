import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

function App() {

  const [textinput, settextinput] = useState('');
  const [testTask,settestTask] = useState([]);

  const agregarfunction = () => {
    settestTask([...testTask, textinput]);
    settextinput(null);
  }

  return (
    <View>
      <TextInput placeholder='Agrega en la lista' value={textinput} 
      onChangeText={text => settextinput(text)} />
      <Button title='Add' onPress={() => agregarfunction()} />
      <Text> Datos: </Text>
        {
          testTask.map((item,index) => {
           return <Text text={item} index={index}></Text>
          })
        }
      
    </View>
  );
}

export default App;