import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import wallpaper from "../images/wallpaper.jpg";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  // console.log(DUMMY_DATA[0].title);
  // const data = DUMMY_DATA.map((meetup) => (
  //   <MeetupList key={meetup.id} meetups={meetup} image={wallpaper} />
  // ))

  useEffect(() => {
    setIsLoading(true)
    fetch(
      "https://react-getting-started-d5553-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = []

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }

          meetups.push(meetup)
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* {[<li>item1</li>, <li>item2</li>]} */}
      {/* <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul> */}
      {/* <MeetupList meetups={loadedMeetups} image={wallpaper} /> */}
      <MeetupList meetups={loadedMeetups} />
      {/* {data} */}
    </section>
  );
};

export default AllMeetupsPage;
