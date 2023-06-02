import { useEffect, useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "./Home.css";
import ShowGrid from "./ShowGrid";
export default function Home() {
  const [name, setName] = useState("");
  const [shows, setShows] = useState([]);
  const callback = (name) => setName(name);
  useEffect(() => {
    const dataFetch = async () => {
      if (name) {
        const res = await (
          await fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
        ).json();
        const showsList = Object.keys(res).map((k) => res[k].show);
        setShows(showsList);
      }
    };
    dataFetch();
  }, [name]);
  return (
    <>
      <Header />
      <main className="container">
        <SearchBar callback={callback} />
        {shows.length > 0 && <ShowGrid shows={shows} />}
      </main>
    </>
  );
}
