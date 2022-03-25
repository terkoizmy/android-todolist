import { StatusBar } from 'expo-status-bar';
import {react, useState} from 'react'
import { StyleSheet,  View, ScrollView } from 'react-native';
import { Button } from "native-base";
import Task from './components/Task'
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, Modal, FormControl, Input  } from 'native-base';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [alltask, setAlltask] = useState([])

  const handleSave = () => {
    let temp = alltask
    const data = {
      title: title,
      description: description
    }
    temp.push(data)
    setAlltask(temp)
    // console.log(data.title)
    setDescription("")
    setTitle("")
    
  }

  const deleteTask = (index) => {
    let temp = [...alltask]
    temp.splice(index, 1);
    setAlltask(temp)
  }

  return (
    <NativeBaseProvider>
      <View style={styles.container}>

        <View style={styles.taskwrap}>
          <Text style={styles.TextTitle}>Your Task Today</Text>

          <View style={styles.taskitem}>
            <ScrollView>
              {alltask.map((data, index) => {
              return <Task text={data.title} description={data.description} key={index} 
              onpress={ () =>  deleteTask()} />
              })}

              <Button style={styles.buttonItem} onPress={() => setShowModal(true)}> Add Task</Button>
            </ScrollView>
            

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Add Task</Modal.Header>
                <Modal.Body>
                  <FormControl>
                    <FormControl.Label>Title</FormControl.Label>
                    <Input value={title} onChangeText={text => setTitle(text)} />
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label>Description</FormControl.Label>
                    <Input value={description} onChangeText={text => setDescription(text)} />
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                    setShowModal(false);
                  }}>
                      Cancel
                    </Button>
                    <Button onPress={() => {
                      handleSave()
                      setShowModal(false);
                  }}>
                      Save
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </View>
        
          

        </View>

      </View>

      
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#7dd3fc',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  taskwrap: {
    flex:1,
    paddingTop: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextTitle: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  taskitem: {
    flex:1, 
    alignItems: 'center',
    padding: 15,
    minWidth: 325,
    backgroundColor: '#0c4a6e',
    borderRadius: 15,
    flexDirection: 'column'
  },
  buttonItem: {
    backgroundColor:'#7dd3fc', 
    padding: 10,
    borderRadius: 5,
    width: 295,
    marginBottom: 20
},
});
