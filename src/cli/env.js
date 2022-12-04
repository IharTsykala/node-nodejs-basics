const PREFIXES = {
	RSS_:'RSS_'
}

const ENV = process.env

const parseEnv = () => {
	for (let key in ENV) {
		if (key.startsWith(PREFIXES.RSS_)) {
			console.log(`${key}=${ENV[key]}`);
		}
	}
};

// parseEnv();