 
const Sequelize = require('sequelize')

const orm = sequelize = new Sequelize('burgers_db', 'root', 'root', {
        dialect: 'mysql'
    })



    function selectAll(params) {
        sequelize.query("SELECT * FROM burgers"
        
        )
        .then(burgers => {
        console.log(burgers)
        })
    }
    
selectAll()



