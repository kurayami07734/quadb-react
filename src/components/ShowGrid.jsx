import Card from "./Card";
import Placeholder from "../assets/placeholder.jpg";
import "./ShowGrid.css";
export default function ShowGrid({ shows }) {
  return (
    <div className="grid">
      {console.log(shows)}{" "}
      {shows.map((show) => (
        <Card
          name={show.name}
          image={show.image?.medium ?? Placeholder}
          id={show.id}
        />
      ))}
    </div>
  );
}
