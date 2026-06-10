import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EBook</Text>
      <MaterialCommunityIcons name="account" size={24} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flexDirection: 'row', // <-- make horizontal layout beacsue by default it's flex-direction: 'column'
        justifyContent: 'space-between',  
        alignItems: 'center',
        padding: 14,
    },
    title: {
        fontSize: 23,
        color: 'white'
    }
})