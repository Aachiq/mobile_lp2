import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

export default function Header({ isRedirect }: { isRedirect?: boolean }) {
  return (
    <View style={styles.container}>
      {isRedirect && <AntDesign name="arrow-left" size={24} color="white" onPress={() => router.back() } />}
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