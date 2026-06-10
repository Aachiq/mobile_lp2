import { FavoritesContext } from "@/context/favoriteContext";
import { useContext } from "react";
import { Text, View, Button } from "react-native";

export default function FavoritesScreen() {

  const {deleteFavorite, favoritesList } = useContext(FavoritesContext)

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {favoritesList.map((book: any) => (
        <View
          key={book.id}
          style={{ marginBottom: 20 }}
        >
          <Text>{book.title}</Text>

          <Button
            title="Delete"
            onPress={() => deleteFavorite(book.id)}
          />
        </View>
      ))}
    </View>
  );
}