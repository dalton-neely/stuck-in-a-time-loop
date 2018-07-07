const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', input => {
    for(let i = 1; i <= parseInt(input, 10); i++)
        console.log(`${i} Abracadabra`)
    rl.close()
})