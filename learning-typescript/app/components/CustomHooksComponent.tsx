"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface PokeData {
  name: string;
  url: string;
}

const fetchAPI = (url: string) => {
  const [data, setData] = useState<PokeData[] | null>();
  const [done, setDone] = useState(false);

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
        <div>
          <Image alt={data[0].name} src={data[0].url} width={40} height={40} />
          <p>{data[0].url}</p>
        </div>
      )}
    </div>
  );
};

export default CustomHooksComponent;
