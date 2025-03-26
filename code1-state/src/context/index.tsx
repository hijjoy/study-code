import { createContext, PropsWithChildren, useState, useContext } from "react";

interface Context {
  count: number;
  addOne: () => void;
}

const CountContext = createContext<Context | null>(null);

export const CountProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CountContext.Provider value={{ count, addOne }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
};
