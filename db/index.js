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

  export const insertColorData = (
    emotion,color
  ) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT OR REPLACE INTO  colordata (emotion,color)
            VALUES (?,?)`,
          [emotion,color],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        )
      })
    })
  }
  
  export const updateColorData = (
    which,emotion,color
  ) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `UPDATE colordata
          SET emotion = ?, color=?
          WHERE id = ?
          `,
          
          [emotion,color,which],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        )
      })
    })
  }

  export const fetchColorData = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM colordata`,
          [],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        )
      })
    })
  }