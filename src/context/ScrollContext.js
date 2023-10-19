import { createContext, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isScrolled, setScrolled] = useState(false);

  return (
    <ScrollContext.Provider value={{ isScrolled, setScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};
