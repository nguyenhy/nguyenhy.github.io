const sourcePath = 'src/index.html';
const outputPath = './src/index-output.html';
const { readFileSync, writeFileSync } = require('fs')
const posthtml = require('posthtml')

const posthtmlInclude = require('posthtml-include')

const html = readFileSync(sourcePath)

posthtml(
    [
        posthtmlInclude({
            "root": __dirname + '/src/template',
        })
    ]
)
    .process(html)
    .then((result) => {
        const html = result.html || '';
        console.log(''
            , '\nwrite to file : ', outputPath
            , '\nhtml :', html.length
        )
        writeFileSync(outputPath, result.html || '')
    })