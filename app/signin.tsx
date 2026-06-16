import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (value: string) => {
        setEmail(value)
    }
    const handleChangePassword = (value: string) => {
        setPassword(value)
    }

    const handleSubmit = () => {
        console.log(email)
        console.log(password)

        if(email === "admin@gmail.com" && password === "admin"){
            router.push('/home')
        }
        // handle messages error
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/icon.png')} style={styles.image} />

            <View style={{width: '100%', padding: 20}}>
                <View style={{marginVertical: 5}}>
                    <Text style={{paddingBottom: 5, fontWeight: 500}}>Email</Text>
                    <TextInput 
                        style={{borderWidth: 1, borderRadius: 8, padding: 10, borderColor: 'grey',color: 'grey'}}
                        placeholder="youremail@gmail.com"
                        onChangeText={(value) => handleChangeEmail(value)}
                    />
                </View>
                <View style={{marginVertical: 5}}>
                    <Text style={{paddingBottom: 5, fontWeight: 500}}>Password</Text>
                    <TextInput 
                        style={{borderWidth: 1, borderRadius: 8, padding: 10, borderColor: 'grey', color: 'grey'}}
                        placeholder="your password"
                        onChangeText={(value) => handleChangePassword(value)}

                    />
                </View>
                <TouchableOpacity 
                    style={{ backgroundColor: '#89CFF0', borderRadius: 15, padding: 10, marginTop: 10}}
                    onPress={handleSubmit}
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