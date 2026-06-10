import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function SplashScreen() {
  
  // spash is setTimeOut inside UseEffect in index.tsx file
  useEffect(() => {
    setTimeout(() => {
      router.push('/home')
    }, 2000)
  },[])

  return (
    <View style={styles.container}>
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