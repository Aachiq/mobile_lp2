import { FavoritesContext } from "@/context/favoriteContext";
import { useContext } from "react";
import { Text, View, Button } from "react-native";

export default function FavoritesScreen() {

  const favoritesContext = useContext(FavoritesContext)

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {favoritesContext.favoritesList.map((book: any) => (
        <View
          key={book.id}
          style={{ marginBottom: 20 }}
        >
          <Text>{book.title}</Text>

          <Button
            title="Delete"
            onPress={() =>
              favoritesContext.deleteFavorite(book.id)
            }
          />
        </View>
      ))}
    </View>
  );
}