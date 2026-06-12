import Header from "@/components/common/Header";
import { FavoritesContext } from "@/context/favoriteContext";
import { books } from "@/data/books";
import { router } from "expo-router";
import { useContext } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function HomeScreen() {

const favoriteContext = useContext(FavoritesContext)

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={{flex: 1, padding: 8}}>
        {
          books.map((item, index) => {
            return (
              <TouchableOpacity style={styles.card} key={index} 
                onPress={() => router.push({
                  pathname: "/book/[id]",
                  params: {
                    id: "1",
                  },
                })}
              >
                <Image source={{ uri: item.image }} style={styles.image}/>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.description}</Text>
                <Button title="Favorite" onPress={() => favoriteContext.addFavorite(item)}/>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove grey div at the bottom of scroll
    backgroundColor: "#fff"
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    padding: 13,
    elevation: 3, // Android shadow
  },

  image: {
    width: '100%',
    height: 140,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});