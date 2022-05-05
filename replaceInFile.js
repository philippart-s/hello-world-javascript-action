const fs = require('fs')
const exec = require('@actions/exec')

let readme = ""

fs.readFile('README_TEST.md', (err, data) => {
    if (err) throw err;
  
    readme = data.toString().replaceAll('java-operator-template', 'cool')
    console.log(readme.toString())
    fs.writeFile('README_TEST.md', readme.toString(), (err) => {
      
        // In case of a error throw err.
        if (err) throw err;
    })
})

async function gitCommit() {
    await exec.exec('git add README_TEST.md')
    await exec.exec('git commit -m "Init"')
}

gitCommit()