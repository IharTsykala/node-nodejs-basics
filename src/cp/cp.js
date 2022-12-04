import path from "node:path"

import { fork } from 'child_process'
import { FILES, FOLDERS } from "../fs/constants.js";

const filePath = new URL(path.join(FOLDERS.FILES.NAME, FILES.SCRIPT.NAME), import.meta.url).pathname;
const args = ["arguments","for","child","process"];

const spawnChildProcess = async (args) => {
	
	const childProcess = fork(filePath, args);
	childProcess.send(args)
	
	childProcess.on('message', data => {
		console.log("Received from childProcess process", data);
	});
	
	childProcess.on('error', () => {
		process.exit();
	});
};

// spawnChildProcess(args);