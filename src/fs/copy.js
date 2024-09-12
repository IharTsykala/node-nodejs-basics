import { mkdir, access, constants, readdir, copyFile } from 'node:fs/promises';

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import {ERROR, PATH} from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFilesFromDirectory = async ({currentPathSource, currentPathDestination}) => {
	await mkdir(`${currentPathDestination}`, { recursive: true });
	const entries = await readdir(currentPathSource, { withFileTypes: true });
	
	for (let entry of entries) {
		const srcPath = path.join(currentPathSource, entry.name);
		const destPath = path.join(currentPathDestination, entry.name);
		
		entry.isDirectory() ?
			await getFilesFromDirectory({currentPathSource: srcPath, currentPathDestination: destPath}) :
			await copyFile(srcPath, destPath);
	}
};

const copy = async () => {
	const currentPathSource = path.join(__dirname, PATH.COPY_FOLDER_SOURCE)
	const currentPathDestination = path.join(__dirname, PATH.COPY_FOLDER_DESTINATION)
	
	try {
		await access(currentPathSource, constants.F_OK);
	} catch {
		throw Error(ERROR.COPY_FOLDER.CONTEXT);
	}
	
	try {
		await access(currentPathDestination, constants.F_OK);
		
		throw Error(ERROR.COPY_FOLDER.CONTEXT);
	} catch (error) {
		if (error.code === ERROR.COPY_FOLDER.CODE) {
			await getFilesFromDirectory({currentPathSource, currentPathDestination})
			
			
		} else {
			throw Error(error.message);
		}
	}
};

copy();
