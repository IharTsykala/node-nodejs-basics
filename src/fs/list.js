import { readdir, stat } from 'node:fs/promises';
import path from "node:path";
import { fileURLToPath } from "url"

import { FOLDERS } from "./constants.js";
import {checkIsNotExist, getError} from "./utils.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFilesFromDirectory = async ({directoryPath, depth}) => {
	depth = depth + 1
	const filesInDirectory = await readdir(directoryPath);
	const files = await Promise.all(
		filesInDirectory.map(async (file) => {
			const filePath = path.join(directoryPath, file);
			const stats = await stat(filePath);
			
			if (stats.isDirectory()) {
				return getFilesFromDirectory({directoryPath:filePath, depth});
			} else {
				return filePath;
			}
		})
	);
	
	return files?.filter((file) => file.length).flat(depth) ?? [];
};

const list = async () => {
	try {
		await checkIsNotExist({
			name: path.join(__dirname, FOLDERS.FILES.NAME),
		})
		
		const depth = 0
		const listFiles = await getFilesFromDirectory({directoryPath: path.join(__dirname, FOLDERS.FILES.NAME), depth})
		
		console.log(listFiles)
	} catch (e) {
		getError({ e } )
	}
};

// await list();