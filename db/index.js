import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('colordata.db');



export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS colordata (
            id INTEGER PRIMARY KEY NOT NULL,
            emotion TEXT NOT NULL
            color TEXT NOT NULL
            
          )`,
          [],
          () => { resolve() },
          (_, err) => { reject(err) },
        );
      });
    });
  
    return promise;
  }
  