"use client";

import { ReactNode, createContext } from "react";

const initialState = {
  first: "anirudh",
  last: "bhadauria",
};

export const appContext = createContext<typeof initialState>(initialState);

const AppContextHandeler = ({ children }: { children: ReactNode }) => {
  let value = {
    ...initialState,
    name: "anirudh bhadauria",
    goal: 2,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export default AppContextHandeler;
