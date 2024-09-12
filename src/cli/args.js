const { argv } = process;

const parseArgs = () => {
	const args = argv.slice(2);
	
	args.forEach((arg, index) => {
		if (arg.startsWith('--')) {
			console.log(`${arg.slice(2)} is ${args[index + 1]}`);
		}
	});
};

parseArgs();
