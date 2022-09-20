import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import {View, TextInput, Text, Button, StyleSheet, } from 'react-native';

export default function HomeScreen({ navigation }){
    
    const[result, setResult] = useState(0)
    const[firstNumber, setFirstNumber] = useState(null)
    const[secondNumber, setSecondNumber] = useState(null)
    const[data, setData] = useState([])
 
    const handleAdd = () => {
        let total = Number(firstNumber) + Number(secondNumber)
        setResult(Number(firstNumber) + Number(secondNumber))
         setData([...data, {key: firstNumber + " + " + secondNumber + " = " + total}])
     }
  
    const handleSubtract = () => {
        let total = Number(firstNumber) - Number(secondNumber)
        setResult(Number(firstNumber) - Number(secondNumber))
        setData([...data, {key: firstNumber + " - " + secondNumber + " = " + total}])
     }
    
    
    
    
    return (
     <View style={styles.container}>
        <View style = {styles.input}>
            <Text>Result: {result}</Text>
             <TextInput
                 style={{ width:200, borderColor:'gray' , borderWidth: 1}}
                onChangeText={firstNumber => setFirstNumber(firstNumber)}
                value={firstNumber}
                keyboardType="numeric"/>
             <TextInput
                style={{ width:200, borderColor:'gray' , borderWidth: 1}}
                onChangeText={secondNumber => setSecondNumber(secondNumber)}
                value={secondNumber}
                keyboardType="numeric" />
        </View>
        <View style={styles.button}>
            <Button title=" + " onPress={handleAdd}></Button>
            <Button title=" - " onPress={handleSubtract}></Button>
            <Button title="History" onPress={() => navigation.navigate('History', data)}></Button>
         </View>
         <StatusBar style="auto" /> 
     </View>

    )}

    const styles = StyleSheet.create({
        container: {
            flex: 2,
            justifyContent: 'center',
        },
        
        input: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
          button: {
            flex: 0.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            
        },
     
    })
  
  
