import { FavoriteBook, FavoriteContext } from "@/types/context.types";
import {
  createContext,
  useContext,
  useState,
} from "react";

export const FavoritesContext = createContext<FavoriteContext>({ favoritesList: [], userLogged: false });

export function FavoritesProvider({ children }: any) {
  const [favorites, setFavorites] = useState<FavoriteBook[]>([
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
  ]);

  return (
    <FavoritesContext.Provider
      value={{
        favoritesList: favorites,
        userLogged: false
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// here this function just to allow uisng use it outside as hook -> so not required we could do outoise:
// const favoriteContext = useContext(FavoritesContext)

// export function useFavorites() {
//   return useContext(FavoritesContext);
// }