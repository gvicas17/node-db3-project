// scheme-model
const { orWhereNotExists, first } = require('../../data/db-config')
const db = require('../../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add, 
    update,
    remove
}

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes')
    .where({id})
    .first()
    .then(schemaObject => {
        if(!schemaObject){
            return Promise.resolve(null)
        }else{
            return schemaObject
        }
    })
}
// SELECT schemes.scheme_name, steps.step_number, steps.instructions
// FROM steps
// JOIN schemes
// ON steps.scheme_id = schemes.id
// WHERE schemes.id = 1
function findSteps(id){
    return db('schemes')
    .join('steps', 'schemes.id', 'steps.scheme_id')
    .select('schemes.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .orderBy('steps.step_number')
    .where('schemes.id', id)
    // return db('schemes')
    // .then(steps => {
    //     return db('steps')
    //     .where({scheme_id})
    // })
}

function add(schemeObj){
    return db('schemes')
    .insert(schemeObj, 'id')
    .then(([id]) => {
        return findById(id)
    })
}

function update(id, changes){
    return db('schemes')
    .where({id})
    .update(changes)
    .then(schemes => {
        return findById(id)
    })
}

function remove(){
    
}