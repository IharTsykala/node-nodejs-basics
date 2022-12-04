import { createReadStream,createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import path from "node:path";

import {FOLDERS} from "../fs/constants.js";

const decompress = async () => {
	const readStream = createReadStream(new URL(path.join(FOLDERS.FILES.NAME, "archive.gz"), import.meta.url));
	const unZip = createGunzip();
	const writeStream = createWriteStream(new URL(path.join(FOLDERS.FILES.NAME, "fileToCompress.txt"), import.meta.url));
	
	readStream.pipe(unZip).pipe(writeStream);
};

await decompress();