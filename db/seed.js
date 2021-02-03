const mongoose = require("./connection")
const List = require("../models/List")


const manylists = require("./seedData.json")

List.deleteMany({}).then( ()=>{
    List.insertMany(manylists, (err, lists)=>{
        console.log('lists', lists)
       
    })
})