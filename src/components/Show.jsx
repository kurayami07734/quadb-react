import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Placeholder from "../assets/placeholder.jpg";
import "./Show.css";
export default function Show() {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const json = await res.json();
      console.log(json);
      setInfo(json);
    };
    dataFetch();
  }, [id]);
  return (
    <article className="container show">
      <header>
        <h1>{info.name}</h1>
      </header>
      <div className="info-box">
        <img
          src={info?.image?.original ?? info?.image?.medium ?? Placeholder}
          alt={`Poster of ${info.name}`}
          style={{ maxHeight: "600px" }}
        />
        <div className="info">
          <p> The show is {info.type}.</p>
          <p>Language : {info.language}</p>
          <p>
            Genres :
            {info.genres.map((genre) => (
              <span>{genre} </span>
            ))}
          </p>
        </div>
      </div>
    </article>
  );
}
