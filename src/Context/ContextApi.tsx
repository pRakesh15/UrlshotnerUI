import { createContext, useState, ReactNode, useContext } from "react";

// Define the shape of the context
interface ContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
}

// Create Context with default values
 const ContextApi = createContext<ContextProps | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const getToken = localStorage.getItem("AUTH_TOKEN")
    ? JSON.parse(localStorage.getItem("AUTH_TOKEN") as string)
    : null;

  const [token, setToken] = useState<string | null>(getToken);

  const sendData: ContextProps = {
    token,
    setToken,
  };

  return <ContextApi.Provider value={sendData}>{children}</ContextApi.Provider>;
};

export const useContextStore=()=>{
    const context= useContext(ContextApi);
    if (!context) {
        throw new Error("useAuth must be used within a ContextProvider");
      }
    return context;
}
