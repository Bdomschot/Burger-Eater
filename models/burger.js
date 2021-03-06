const orm = require("../config/orm.js")

const burgers = {
    read () {
        return orm.read("burgers")
    },
    create (addObject){
        return orm.create(["burgers", addObject])
    },
    delete (removeObject){
        return orm.delete(["burgers", removeObject])
    },
    update(devoured, id){
        console.log(devoured, id)
        return orm.update(["burgers", devoured, id])
    }   
}

module.exports = burgers;