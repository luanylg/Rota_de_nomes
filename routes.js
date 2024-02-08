import express from "express"

const routes = express.Router()

let lista = ["luany","yaya","ket","chico"]

routes.get("/nomes/:nome", (req,res)=>{
   const {nome} = req.params
    if(nome == lista.find(item => item === nome)){
        return res.status(200).json(`${nome} EXISTENTE`)
    }
    else{ 
        return res.status(200).json(`${nome} INEXISTENTE`)
    }

})

export default routes