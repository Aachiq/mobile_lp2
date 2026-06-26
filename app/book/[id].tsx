import Header from "@/components/common/Header";
import { FavoriteBook } from "@/types/context.types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // const foundBook = books.find(item => item.id == parseInt(id));

  // now it works well here but next commit i will add chnages that shoul be implemented
  const [selectedBook, setSelectedBook] = useState<FavoriteBook>({
    id: 0,
    title: '',
    description: '',
    image: ''
  })

  // fetch book by id
  useEffect(() => {
    fetch(`http://localhost:4200/books/${id}`)
      .then(res => res.json())
      .then(data => setSelectedBook(data))
  }, [id])

  // if (!foundBook) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Book not found</Text>
  //     </View>
  //   );
  // }


  return (
    <SafeAreaView style={styles.container}>
      <Header isRedirect/>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Image source={{ uri: selectedBook?.image }} style={styles.image} />

        <Text style={styles.title}>{selectedBook?.title}</Text>

        <Text>ID: {id}</Text>

        <Text style={styles.description}>
            {selectedBook?.description}
        </Text>

        <View style={styles.commonBox}>
          <Text style={styles.commonTitle}>About this book</Text>

          <Text style={styles.commonText}>
            This book is carefully selected to help you improve your knowledge,
            habits, and productivity. It is part of our curated library collection.
          </Text>

          <Text style={styles.commonText}>
            📦 Delivery: 2–5 days worldwide  
          </Text>

          <Text style={styles.commonText}>
            ⭐ All books are verified and recommended by experts
          </Text>
        </View>

        {/* 🟢 ACTION BUTTONS */}
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => console.log("Favorite")}>
            🛒 Add to Favorites
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Order")}
          >
            🛒 Order Now
          </TouchableOpacity>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 16,
  },

  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
  },

  commonBox: {
    marginTop: 25,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
  },

  commonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  commonText: {
    fontSize: 14,
    marginBottom: 6,
    color: "#444",
  },

  buttons: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});