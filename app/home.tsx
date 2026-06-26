import BottomNavigation from "@/components/common/BottomNavigation";
import Header from "@/components/common/Header";
import { FavoritesContext } from "@/context/favoriteContext";
import { FavoriteBook } from "@/types/context.types";
import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function HomeScreen() {

  const favoriteContext = useContext(FavoritesContext)
  const [booksData, setBooksData] = useState<FavoriteBook[]>([])

  // fetch books from api
  useEffect(() => {
    fetch('http://localhost:4200/books')
      .then(res => res.json())
      .then(json => setBooksData(json))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={{flex: 1, padding: 8}}>
        {
          booksData.slice(1, 3).map((item, index) => {
            return (
              <TouchableOpacity style={styles.card} key={index} 
                // redirect to book details
                onPress={() => router.push({
                  pathname: "/book/[id]",
                  params: {
                    id: item.id,
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
      <BottomNavigation/>
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