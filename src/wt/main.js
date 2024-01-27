import { cpus } from "node:os";
import { Worker, isMainThread } from "node:worker_threads"

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'worker.js');
const firstId = 10;

const newWorker = (data) =>{
	
	return new Promise((resolve, reject) =>{
		const worker = new Worker( filePath, { workerData: data } );
		
		worker.on("message", (result)=> {
			resolve(result)
		});
		
		worker.on("error", () => reject({status: "error", data: null}));
	})
}

const performCalculations = async () => {
	const resultOfArray = []
	
	if (isMainThread) {
		const cpusLength = cpus().length;
		
		for (let i = firstId; i <= firstId + cpusLength; i++) {
			const resultWorker = await newWorker(i);
			
			resultOfArray.push(resultWorker);
		}
	}
	
	console.log(resultOfArray);
};

await performCalculations();
