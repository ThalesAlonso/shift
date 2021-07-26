const express = require('express')
const routes = express.Router()


const examesExameCodigosHemogramaGliclose = ['100', '101']
const examesExameCodigoDescricaoHemogramaGliclose = ['hemograma', 'glicose']
const examesExameCodigosT4TSH = ['102', '103']
const examesExameCodigoDescricaoT4TSH = ['t4', 'tsh']

let db = [
    
    {'1': {identificador: 'Thales Fernando Ferreira Alonso', 
           pedidoCodigo: 'Codigo 1',
           pedidoOrdemServico: 10 ,
           pacienteCodigo: 20,
           pacienteNome: 'Joao Silva',
           pacienteSexo: 'Masculino',
           examesExameDescricao:  examesExameCodigosHemogramaGliclose,
           examesExameCodigo : examesExameCodigoDescricaoHemogramaGliclose
    }},



    {'2': {identificador: 'Yasmin Cruza Da Silva Alonso', 
           pedidoCodigo: 'Codigo 2',
           pedidoOrdemServico: 20 ,
           pacienteCodigo: 30,
           pacienteNome: 'Maria Silva',
           pacienteSexo: 'Feminino',
           examesExameDescricao:  examesExameCodigoDescricaoT4TSH,
           examesExameCodigo : examesExameCodigosT4TSH
    }},
    


    {'3': {identificador: 'Mario Andrade de Souza', 
           pedidoCodigo: 'Codigo 3',
           pedidoOrdemServico: 30 ,
           pacienteCodigo: 40,
           pacienteNome: 'Paulo Robson',
           pacienteSexo: 'Masculino',
           examesExameDescricao:  examesExameCodigosHemogramaGliclose,
           examesExameCodigo : examesExameCodigoDescricaoHemogramaGliclose
    }}
    ]



routes.get('/', ( req, res) => {
    return res.json(db)

});


routes.post('/add', (req, res) => {
    const body = req.body
    
    
    if(!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if( !item[id] )
        return item 
    })

   db = newDB

    return res.send(newDB)
})

module.exports = routes 



