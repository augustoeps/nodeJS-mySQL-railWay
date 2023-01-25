const nx = require("mysql")

const conexion = nx.createConnection({


    host:"localhost",
    user:"root",
    password: "",
    database: "usersdb"


})

const conectar = () =>{

    conexion.connect(err=>{

        if(err) throw err

        console.log("conectado")

    })


}
module.exports = {

    conectar: conectar
}