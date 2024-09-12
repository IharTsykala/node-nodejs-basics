import { access, constants, readdir, stat } from 'node:fs/promises';

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import {ERROR, PATH} from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
		const directoryPath = path.join(__dirname, PATH.LOGGER_LIST)
		
		await access(directoryPath, constants.F_OK);
		
		const depth = 0
		const listFiles = await getFilesFromDirectory({directoryPath, depth})
		
		console.log(listFiles)
	} catch {
		throw Error(ERROR.LOGGER_LIST.CONTEXT);
	}
};

await list();
