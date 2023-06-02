import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ callback }) {
  const [name, setName] = useState("");
  const handleClick = () => callback(name);
  return (
    <div className="search">
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Enter search terms here..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
