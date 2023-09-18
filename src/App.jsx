import { Fragment, useState } from "react";
import MainMenur from "./components/mainMenu";
import useHashTable from './hooks/useHashTable';
import useHashKey from './hooks/useHashKey';


export default function App() {
  const [tela, setTela] = useState("Tela-inicial")
  const hashTable = useHashTable();
  const { stringToBinary, sequenceAddition, getHashKey } = useHashKey();
  
  const exemplo = [
    {
      name: "Lucas",
    },
    {
      name: "Murilo",
    },
    {
      name: "Manu",
    },
    {
      name: "Lilian",
    },
    {
      name: "Hector",
    },
    {
      name: "Hector",
    },
    {
      name: "Hector",
    },
    {
      name: "Hector",
    },
    {
      name: "Hector",
    },
    {
      name: "Hector",
    },
    {
      name: "Hector",
    },
  ]

  return (
    <MainMenur hashTable={exemplo}/>
  )
}