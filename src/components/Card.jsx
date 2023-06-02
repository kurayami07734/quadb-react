import { Link } from "react-router-dom";
export default function Card({ name, image, id }) {
  return (
    <Link to={`/shows/${id}`}>
      <article className="card">
        <img src={image} alt="" />
        <footer>
          <strong>{name}</strong>
        </footer>
      </article>
    </Link>
  );
}
