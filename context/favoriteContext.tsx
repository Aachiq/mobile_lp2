import { FavoriteBook, FavoriteContext } from "@/types/context.types";
import {
  createContext,
  useState,
} from "react";

export const FavoritesContext = createContext<FavoriteContext>({ 
  favoritesList: [], 
  userLogged: false,
  addFavorite: () => {},
  deleteFavorite: () => {}
});

export function FavoritesProvider({ children }: any) {
  const [favorites, setFavorites] = useState<FavoriteBook[]>([]);

  const addFavoriteItem = (book: FavoriteBook) => {
    setFavorites((prev) => [...prev, book]);
  }

  const deleteFavoriteItem = (id: number) => {7
    setFavorites(favorites.filter(item => item.id !== id));
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoritesList: favorites,
        userLogged: false,
        addFavorite: addFavoriteItem,
        deleteFavorite: deleteFavoriteItem
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}