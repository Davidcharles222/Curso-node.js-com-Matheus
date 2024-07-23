// npm install inquirer@8.1.2
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name: 'p1',
            message: 'Qual a primeira nota?'
        },
        {
            name: 'p2',
            message: 'Qual a segunda nota?'
        }
    ]).then((res) => {
        console.log(res)
        const media = (parseInt(res.p1) + parseInt(res.p2)) / 2


        console.log(`A média é: ${media}`)
    }).catch(err => {
        console.log(err)
    })
