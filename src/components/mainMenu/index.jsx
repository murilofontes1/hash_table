import Button from "../button";
import ContactList from "./contactList";
import SearchBar from "./searchBar";
import React, { useEffect } from 'react';

import styles from "./styles.module.css"
export default function MainMenur({hashTable}) {
    const exportarContatos = () => {
        console.log("Hello wordl")
    }

   /* function hashTable() {
        useEffect(() => {
            createHashTable();
        }, []);

        function createHashTable() {
            let hashTable = [32]
            for(let i = 0; i < 32; i++){
                hashTable[i] = null;
            }
            console.log("Hash table successfully created")
            return hashTable;
        }
    } */

    return (
        <div className={styles.mainMenur}>
            <SearchBar/>
            <ContactList hashTable={hashTable}/>
            <Button func={exportarContatos}>Exportar Contatos</Button>
        </div>
        
    )
}