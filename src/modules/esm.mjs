import { readFile } from 'node:fs/promises'
import path from "node:path";
import { release, version } from "os"
import {createServer as createServerHttp} from 'http'
import { fileURLToPath } from 'url'

const url = import.meta.url

const __filename = fileURLToPath(url)
const __dirname = path.dirname(__filename)

import './files/c.js';
import { FOLDERS } from "../fs/constants.js";

const random = Math.random();

const fileName = random > 0.5 ? "a" : "b"

const fileUrl = new URL(path.join(__dirname, FOLDERS.FILES.NAME, `${fileName}.json`), url)
export const unknownObject = JSON.parse(await readFile(fileUrl))

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`)

console.log(`Path to current file is ${__filename}`)
console.log(`Path to current directory is ${__dirname}`)

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted')
});

const PORT = 3000

console.log(unknownObject)

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
    console.log('To terminate it, use Ctrl+C combination')
});

