import path from "node:path"
import {fileURLToPath} from "url"

import {checkIsExistDirectory, checkIsExistFile, getError} from "./utils.js";
import {FILES, FOLDERS, MESSAGES} from "./constants.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const create = async () => {
	try {
		await checkIsExistDirectory( {
			folderName: path.join(__dirname, FOLDERS.FILES.NAME),
			successMessage: MESSAGES.SUCCESS.DIRECTORY_IS_CREATED
		} )
		
		await checkIsExistFile( {
			fileName: path.join(__dirname, FOLDERS.FILES.NAME, FILES.FRESH.NAME),
			fileContent: FILES.FRESH.CONTENT,
			errorMessage: MESSAGES.ERROR.FS_OPERATION_FAILED,
			successMessage: MESSAGES.SUCCESS.FILE_IS_CREATED
		})
	} catch (e) {
		getError({ e })
	}
};

// await create();