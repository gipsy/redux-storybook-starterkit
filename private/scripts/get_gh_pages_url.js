const parse = require('git-url-parse')

const ghUrl = process.argv[2]
const parsedUrl = parse(ghUrl)

const ghPagesUrl = `https://${parsedUrl.owner}.github.io/${parsedUrl.name}`

/* eslint-disable no-console */
console.log(ghPagesUrl)
/* eslint-enable no-console */
