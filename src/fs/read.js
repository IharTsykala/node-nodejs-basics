import { access, constants, readFile } from 'node:fs/promises';

import { fileURLToPath } from 'url';
import path from 'path';

//constants
import {ERROR, PATH} from "./constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    try {
	    const currentPathSource = path.join(__dirname, PATH.READ_FILE)
	    
	    await access(currentPathSource, constants.F_OK);
			
	    const contents = await readFile(currentPathSource, { encoding: 'utf8' })
	    console.log(contents)
    } catch {
	    throw new Error(ERROR.REMOVE_FILE.CONTEXT);
    }
};

await read();
