import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Show() {
  const [info, setInfo] = useState();
  const { id } = useParams();
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const json = await res.json();
      setInfo(json);
    };
    dataFetch();
  }, []);
  return <>{info.show.name}</>;
}
