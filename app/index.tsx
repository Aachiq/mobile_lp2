import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  
  // splash is setTimeOut inside UseEffect in index.tsx file
  useEffect(() => {
    setTimeout(() => {
      router.push('/home')    
    }, 2000)
  },[])

  return (
    <View style={styles.container}>
      <Image source={require(`../assets/images/icon.png`)} style={{ width: 100, height: 100 }} />
      <Text style={styles.logoType}>My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoType: {
    fontSize: 32,
    fontWeight: "bold",
  },
});