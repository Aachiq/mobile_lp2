import Header from "@/components/common/Header";
import { FavoriteBook } from "@/types/context.types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // use | null here in type & init values with null value
  const [selectedBook, setSelectedBook] = useState<FavoriteBook | null>(null)

  // fetch book by id
  // useEffect(() => {
  //   fetch(`http://localhost:4200/books/${id}`)
  //     .then(res => res.json())
  //     .then(data => setSelectedBook(data))
  // }, [id])

  // here handle 3 cases alwyas in api -> (loading, success, error) & create state for each one
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   setLoading(true);

  //   fetch(`http://localhost:4200/books/${id}`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         setLoading(false);
  //         setError("Book not found");

  //         // console.log('response :', response)-> this show ok: false when status 404 and "books/20" not found
  //         // throw new Error("Book not found"); --> this put the message inside catch() but no need it
  //       }

  //       return response.json();
  //     })
  //     .then((data) => {
  //       setSelectedBook(data);
  //       setLoading(false);
  //     })
  // }, [id]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:4200/books/${id}`);

        if (!response.ok) {
          setSelectedBook(null);
          return;
        }

        const data = await response.json();
        setSelectedBook(data);
      } catch (error) {
        setSelectedBook(null); // and loading is always initted with true it keeps loading.
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

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