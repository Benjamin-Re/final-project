import {Layout} from "./components/Layout";
import {GeneralContext} from "./components/Model";
import { createContext, useState, useContext } from "react";

export const Context = createContext();

function App() {
  const [letter, setLetter] = useState("B");
  
  return (
    <>
    <Context.Provider value={{letter, setLetter}}>
      <Layout></Layout>
    </Context.Provider>
    </>  
  );


}


export default App;

/*
- Get data from API
- Store data in DB
- Multiplayer with sockets
*/