import { access, constants, unlink } from 'node:fs/promises';

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import {ERROR, PATH} from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
	try {
		const currentPathSource = path.join(__dirname, PATH.REMOVE_FILE)
		
		await access(currentPathSource, constants.F_OK);
		
		await unlink(currentPathSource);
	} catch {
		throw new Error(ERROR.REMOVE_FILE.CONTEXT);
	}
};

await remove();
