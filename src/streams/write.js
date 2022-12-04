import { createWriteStream } from 'fs'
import path from "node:path"
import {pipeline} from "stream"
import {fileURLToPath} from "url"

import { FILES } from "../fs/constants.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fileName = FILES.FILE_TO_WRITE.NAME

export const write = async () => {
	const filePath = path.resolve(__dirname, fileName)

	pipeline(
		process.stdin,
		createWriteStream(filePath),
		(err) => {
			if (err) {
				console.log(err)
			}
		},
	)
};

// await write()
