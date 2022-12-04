import { unlink } from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from "url"

import {checkIsNotExist, getError} from "./utils.js";
import {FILES} from "./constants.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const remove = async () => {
	try {
		await checkIsNotExist({ name: path.join(__dirname, FILES.FILE_TO_REMOVE.NAME) })
		await unlink(path.join(__dirname, FILES.FILE_TO_REMOVE.NAME))
	} catch (e) {
		getError({ e } )
	}
};

// await remove();