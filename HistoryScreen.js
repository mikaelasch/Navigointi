import { React } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet } from 'react-native';


export default function HistoryScreen ({ route }) {


return ( 
    <View style={styles.container}>
        <View style={styles.list}>
        <FlatList
            data={route.params}
            renderItem={({item}) => <Text>{item.key}</Text> } />
        </View>
    <StatusBar style="auto" />
    </View>
)
}

const styles = StyleSheet.create ({
 
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      history: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
      }
})