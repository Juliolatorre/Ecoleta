// //importar a depedencia do sqlite
const sqlite3 = require("sqlite3").verbose()

// // criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utlilizar o objeto de banco de dados, para menos operações
// db.serialize(() => {

    //criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );

    // `)
    // //inserir dados na tabela

    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);                
    // `
    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
      
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData) 
    
    // // consultar dados na tabela
    // db.all(`SELECT name FROM places`, function(err, rows) {
    //     if(err) {
    //       return console.log(err)
    //     }

    //      console.log("Aqui estão seus registros: ")
    //      console.log(rows)
    // })
    // deletar um dado da tabela
<<<<<<< HEAD
//     db.run(`DELETE FROM places WHERE id = ?`, [5, 6, 7 ], function(err) {
//         if(err) {
//             return console.log(err)
//         } 

//         console.log("Registro deletado com sucesso!")
//     })
// // })
=======
    // db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     } 

    //     console.log("Registro deletado com sucesso!")
    // })
// })
>>>>>>> 83a2309ed45483a2aefacad9d73743974e89db0a
