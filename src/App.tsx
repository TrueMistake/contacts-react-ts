import React, {FC, useEffect, useState} from 'react';
import {ContactsObject} from "./types/Types";
import Card from "./components/Card";

const App:FC = () => {
    const [contacts, setContacts] = useState<ContactsObject[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const showAgeContact = (idx:number) => {
        setContacts(contacts.map((item, index) => {
            if (index === idx) {
                return {
                    ...item, showAge: true
                }
            }
            return item;
        }))
    }

    useEffect(() => {
      const fetchContacts = async () => {
          setIsLoading(true);
          await fetch('https://randomuser.me/api/?results=5')
              .then(response => response.json())
              .then(res => {
                  setContacts(res.results);
                  setIsLoading(false);
              });
      }
      fetchContacts();
  }, []);


  return (
    <div className="App">
      <h1>Contact list</h1>
      <div className="contacts">
          {isLoading && !contacts.length
              ? <h2>Загрузка контактов</h2>
              : contacts.map((item, index) => (
                    <Card item={item} index={index} showAgeContact={showAgeContact}/>
                ))
          }
      </div>
    </div>
  );
}

export default App;
