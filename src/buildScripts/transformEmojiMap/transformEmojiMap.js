const fs = require('fs')
const FILE_PREFIX = 'const emoji = '
const FILE_SUFFIX = ';export default emoji;'

const INPUT_FILE = 'src/buildScripts/transformEmojiMap/emojiMap.json'
const OUTPUT_FILE = 'src/constants/maps/emoji.ts'

console.log('inputFile: ' + INPUT_FILE)
console.log('outputFile: ' + OUTPUT_FILE)

console.log('Reading inputfile...')
let content = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'))

console.log('transforming to correct syntax...')
let result = transform(content)

console.log('writing file')
fs.writeFileSync(
    OUTPUT_FILE,
    [FILE_PREFIX, JSON.stringify(result), FILE_SUFFIX].join('')
)

function transform(input) {
    const result = {}
    for (const [key] of Object.entries(input)) {
        const keys = key.split(',')
        keys.forEach((isolatedKey) => {
            result[isolatedKey] = input[key].concat(result[isolatedKey] || [])
        })
    }
    return result
}
