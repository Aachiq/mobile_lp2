import { router } from "expo-router";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function signin() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/icon.png')} style={styles.image} />

            <View style={{width: '100%', padding: 20}}>
                <View style={{marginVertical: 5}}>
                    <Text style={{paddingBottom: 5, fontWeight: 500}}>Email</Text>
                    <TextInput 
                        style={{borderWidth: 1, borderRadius: 8, padding: 10, borderColor: 'grey',color: 'grey'}}
                        placeholder="youremail@gmail.com"
                    />
                </View>
                <View style={{marginVertical: 5}}>
                    <Text style={{paddingBottom: 5, fontWeight: 500}}>Password</Text>
                    <TextInput 
                        style={{borderWidth: 1, borderRadius: 8, padding: 10, borderColor: 'grey', color: 'grey'}}
                        placeholder="your password"
                    />
                </View>
                <TouchableOpacity 
                    style={{ backgroundColor: '#89CFF0', borderRadius: 15, padding: 10, marginTop: 10}}
                    onPress={() => router.push('/home')}
                >
                        <Text style={{textAlign: 'center', fontWeight: 600, fontSize: 15}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 40
    }
})