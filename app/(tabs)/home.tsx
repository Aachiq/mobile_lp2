import Header from "@/components/common/Header";
import { FavoritesContext } from "@/context/favoriteContext";
import { useContext } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    description: "Build good habits and break bad ones.",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    title: "The Alchemist",
    description: "A journey of self-discovery.",
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    title: "Deep Work",
    description: "Rules for focused success.",
    image: "https://picsum.photos/200/300?random=5",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    description: "What the rich teach their kids about money.",
    image: "https://picsum.photos/200/300?random=5",
  },
  {
    id: 5,
    title: "Clean Code",
    description: "A handbook of agile software craftsmanship.",
    image: "https://picsum.photos/200/300?random=4",
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    description: "What the rich teach their kids about money.",
    image: "https://picsum.photos/200/300?random=5",
  },
];

export default function HomeScreen() {

//   const {
//   favorites,
//   addFavorite,
// } = useFavorites();

const favoriteContext = useContext(FavoritesContext)

console.log('## favoriteContext :', favoriteContext)

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={{flex: 1, padding: 8}}>
        {
          books.map((item, index) => {
            return (
              <View style={styles.card} key={index}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />

                <Text style={styles.title}>{item.title}</Text>

                <Text>
                  {item.description}
                </Text>
                <Button
                  title="Favorite"
                  // onPress={() => addFavorite(item)}
                />
              </View>
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