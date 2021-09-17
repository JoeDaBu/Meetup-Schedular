import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (meetup) => {
    // setUserFavorites(userFavorites.concat(meetup))//doen't gurantee latest state
    setUserFavorites((prev) => {
      return prev.concat(meetup);
    }); //guarantees latest state as function are processed one by one
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prev) => {
      return prev.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {/* value is given teh latest values */}
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext