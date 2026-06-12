import { createContext, useState } from "react"

// 1. create context in 1 line
const AuthContext = createContext({})

// 4.1 add data structure to context compatible with "value={{ }}"
const AuthContext = createContext({
  user: {
    fullName: '',
    email: '',
    isLogged: false
  }
})

type FavoriteItem = { id: number, title: string, description: string };
// 4.2 add type to the data of context
const AuthContext = createContext<{
  user: { fullName: string; email: string; isLogged: boolean },

  // 5.1 here we'll add favorites to context
  favorites: FavoriteItem[]

  // 5.3 add methods to manage context state
  addFavorite: (item: FavoriteItem) => void,
  deleteFavorite: (id: number) => void
}
>({
  user: {
    fullName: '',
    email: '',
    isLogged: false
  },

  // 5.2 here each user select favorites
  favorites: [],
  addFavorite: () => {},
  deleteFavorite: () => {}
})

// 2.1 create function Provider not function Context
export function AuthProvider({ children }: any): any {

  // 3.1 create state of context
  const [userInfos, setUserInfos] = useState({
    fullName: '',
    email: '',
    isLogged: false
  })

  // 5.5 start methods to manage context state
  const addFavoriteItem = (item: FavoriteItem) => {}
  const deleteFavoriteItem = (id: number) => {}

  return (
    // 2.2 here ParentTag is <ContextName.ProviderKeyWord> {children} </ContextName.ProviderKeyWord>
    <AuthContext.Provider

      // 2.3 here value is object with value={{ }}
      //   value={{
      //     user: {
      //         fullName: '',
      //         email: '',
      //         isLogged: false
      //     }
      //   }}

      // 3.2 add state to context value
      value={{
        user: userInfos,
        // 5.5 share favorites action here
        addFavorite: addFavoriteItem,
        deleteFavorite: deleteFavoriteItem
      }}
    >
      {children}
    </AuthContext.Provider>
  )

}