"use client";

import React, { useState, useEffect } from "react";

interface PokeData {
  name: string;
  url: string;
}

const fetchAPI = (url: string) => {
  const [data, setData] = useState<PokeData[] | null>(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    const fetchURL = async () => {
      const res = await fetch(url);
      const data = await res.json();

      setData(data.results);
      setDone(true);
    };

    fetchURL();
  }, [url]);

  return {
    data,
    done,
  };
};

const CustomHooksComponent = () => {
  const { data, done } = fetchAPI("https://pokeapi.co/api/v2/pokemon");

  return (
    <div>
      {done && data && (
        <ul>
          {data.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomHooksComponent;
