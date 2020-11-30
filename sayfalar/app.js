
/* **fetch all image inside folder and print img tags into separate html file
    **you can change to the template function change the output file
   ** the output file will create in the same folder of the this file 
*/

const fs = require('fs')
const { stdout } = require('process')
const readline = require('readline').createInterface({
    input: process.stdin,
    output:stdout,
})

function Tamplete(src) {
    return `<img src='../img/Nostalji/${src}' alt='nostalji'>\n `;
}

readline.question("Enter file directory", (dir) => {
    const files=fs.readdirSync(dir)
    console.log(files);
    files.forEach(e => {
        fs.appendFileSync('output.html', Tamplete(e), 'utf8');
    })
    readline.close();
} )