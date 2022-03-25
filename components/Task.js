import {react, useState} from 'react'

import { StyleSheet, Text, View, Box, TouchableOpacity, ScrollView } from 'react-native';
import { Button, IconButton, Modal, FormControl, Input } from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee,faX } from '@fortawesome/free-solid-svg-icons'

const Task = (props) => {
    const [showModal, setShowModal] = useState(false);
    
    return(
        <TouchableOpacity onPress={() => setShowModal(true)}>
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <Text style={styles.Task}>{props.text}</Text>
                </View>
                <View style={styles.itemRight}>
                    <IconButton icon={<FontAwesomeIcon icon={ faX } />} 
                    onPress={props.onpress} />


                </View>
            </View>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header > {props.text}</Modal.Header>
                <Modal.Body>
                    <ScrollView>
                    <Text> {props.description}</Text>
                    </ScrollView>
                </Modal.Body>
              </Modal.Content>
            </Modal>
        </TouchableOpacity>
        
        
        
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor:'#7dd3fc', 
        padding: 10,
        borderRadius: 5,
        width: 295,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    Task: {
        color: 'black'
    },
    title: {
        justifyContent: 'center',
        fontWeight: 'bold'
    }
})

export default Task