export interface FavoriteBook {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface FavoriteContext {
    favoritesList: FavoriteBook[];
    userLogged: boolean;
}