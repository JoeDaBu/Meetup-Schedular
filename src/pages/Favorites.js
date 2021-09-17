import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";

import FavoritesContext from "../store/favorites-context";

const FavoritesPage = () => {
  const meetupFavorites = useContext(FavoritesContext);

  let content;

  if (meetupFavorites.totalFavorites === 0) {
    content = <p>No Favorites Exist</p>;
  } else {
    content = <MeetupList meetups={meetupFavorites.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
