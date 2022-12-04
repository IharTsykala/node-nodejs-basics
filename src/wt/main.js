import { cpus } from "node:os";
import { Worker } from "node:worker_threads"

const filePath = new URL("worker.js", import.meta.url);
const firstId = 10;

const newWorker = (data) =>{
	
	return new Promise((resolve, reject) =>{
		const worker = new Worker( filePath, { workerData: data } );
		
		worker.on("message", (result)=> {
			resolve({status: "resolved", data: result})
		});
		
		worker.on("error", () => reject({status: "error", data: null}));
	})
}

const performCalculations = async () => {
	const cpusLength = cpus().length;
	const resultOfArray = []
	
	for (let i = firstId; i <= firstId + cpusLength; i++) {
		const resultWorker = await newWorker(i);
		resultOfArray.push(resultWorker);
	}

	console.log(resultOfArray);
};

await performCalculations();