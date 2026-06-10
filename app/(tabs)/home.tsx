import Header from "@/components/common/Header";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (

    // fix Header inisde status bar using SafeAreaView
    <SafeAreaView>
      <Header/>
      <Text>Hello Home</Text>
    </SafeAreaView>
  )
}