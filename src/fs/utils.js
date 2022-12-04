import { access, mkdir, writeFile } from 'node:fs/promises';

import {ERRORS_CODES, MESSAGES} from "./constants.js";

export const checkIsExistDirectory = async ( { folderName, successMessage } ) => {
	try {
		await access(folderName)
	} catch {
		await mkdir(folderName)
		console.log(successMessage)
	}
}

export const checkIsExistFile = async ( { fileName, fileContent, errorMessage, successMessage } ) => {
	try {
		await access(fileName)
		console.error(errorMessage)
	} catch {
		await  writeFile(fileName, fileContent);
		console.log(successMessage)
	}
}

export const checkIsNotExist = async ( { name } ) => {
	try {
		await access(name)
	} catch {
		throw new Error(MESSAGES.ERROR.FS_OPERATION_FAILED)
	}
}

export const checkIsExist = async ( { name } ) => {
	try {
		await access(name)
		throw new Error(MESSAGES.ERROR.FS_OPERATION_FAILED)
	} catch(e) {
		if(e.message === MESSAGES.ERROR.FS_OPERATION_FAILED) {
			throw new Error(e)
		}
	}
}

export const getError = ({ e }) => {
	if(ERRORS_CODES[e.code]) {
		console.error(MESSAGES.ERROR.FS_OPERATION_FAILED)
	} else {
		console.error(e.message)
	}
}