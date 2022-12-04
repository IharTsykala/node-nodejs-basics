import { rename as renamePromises } from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from "url"

import {checkIsExist, checkIsNotExist, getError} from "./utils.js";
import {FILES} from "./constants.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rename = async () => {
	try {
		await checkIsNotExist({name: path.join(__dirname, FILES.WRONG_FILE_NAME.NAME)})
		
		await checkIsExist({name: path.join(__dirname, FILES.PROPER_FILE_NAME.NAME)})
		
		await renamePromises(path.join(__dirname, FILES.WRONG_FILE_NAME.NAME), path.join(__dirname, FILES.PROPER_FILE_NAME.NAME))
	} catch (e) {
		getError( { e } )
	}
};

// await rename();