import { mkdir, readdir, copyFile } from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from "url"

import {FOLDERS} from "./constants.js";
import {checkIsExist, checkIsNotExist, getError} from "./utils.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFilesFromDirectory = async ({directorySourcePath, directoryDestinationPath}) => {
		await mkdir(`${directoryDestinationPath}`, { recursive: true });
		const entries = await readdir(directorySourcePath, { withFileTypes: true });
		
		for (let entry of entries) {
			const srcPath = path.join(directorySourcePath, entry.name);
			const destPath = path.join(directoryDestinationPath, entry.name);
			
			entry.isDirectory() ?
				await getFilesFromDirectory({directorySourcePath: srcPath, directoryDestinationPath: destPath}) :
				await copyFile(srcPath, destPath);
		}
};

const copy = async () => {
	try {
		await checkIsNotExist({
			name: path.join(__dirname, FOLDERS.FILES.NAME),
		})
	
		await checkIsExist({
			name: path.join(__dirname, FOLDERS.FILES_COPY.NAME),
		})
		
		await getFilesFromDirectory({
			directorySourcePath: path.join(__dirname, FOLDERS.FILES.NAME),
			directoryDestinationPath: path.join(__dirname, FOLDERS.FILES_COPY.NAME, FOLDERS.FILES.NAME)
		})
	} catch (e) {
		getError( { e } )
	}
};

// copy();