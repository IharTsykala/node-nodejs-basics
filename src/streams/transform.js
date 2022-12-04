import { Transform } from "node:stream"

const transform = async () => {
	const { stdin, stdout } = process
	const reverse = new Transform({
		transform(chunk, encoding, callback){
			callback(null, (chunk.toString(encoding).split("").reverse().join("").trim()) + '\n');
		}
	});
	stdin.pipe(reverse).pipe(stdout);
};

// await transform();