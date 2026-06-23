import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";

export default function BottomNavigation() {
  return (
     <View style={styles.container}>
      <View style={styles.tabItem}>
        <MaterialCommunityIcons name="account" size={24} color="black" />
        <Text style={{fontWeight: 500}}>Home</Text>
      </View>
      <View style={styles.tabItem}>
        <MaterialCommunityIcons name="account" size={24} color="black" />
        <Text style={{fontWeight: 500}}>About</Text>
      </View>
      <View style={styles.tabItem}>
        <MaterialCommunityIcons name="account" size={24} color="black" />
        <Text style={{fontWeight: 500}}>Contact</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  }
})
