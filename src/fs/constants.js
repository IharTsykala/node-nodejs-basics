import path from "node:path"

export const FOLDERS = {
	FILES: {
		NAME: 'files'
	},
	FILES_COPY: {
		NAME: 'files_copy'
	}
}

export const FILES = {
	FRESH: {
		NAME: "fresh",
		CONTENT: "I am fresh and young"
	},
	WRONG_FILE_NAME: {
		NAME: path.join("files", "wrongFilename.txt"),
	},
	PROPER_FILE_NAME: {
		NAME: path.join("files", "properFilename.md"),
	},
	FILE_TO_REMOVE: {
		NAME: path.join("files", "fileToRemove.txt"),
	},
	FILE_TO_READ: {
		NAME: path.join("files", "fileToRead.txt"),
	},
	FILE_TO_WRITE: {
		NAME: path.join("files", "fileToWrite.txt"),
	},
	SCRIPT: {
		NAME: "script.js",
	},
	FILE_TO_CALCULATE_HASH_FOR: {
		NAME: "fileToCalculateHashFor.txt"
	}
}

export const MESSAGES = {
	SUCCESS : {
		DIRECTORY_IS_CREATED: 'Directory is created successfully',
		FILE_IS_CREATED: "File is created",
	},
	ERROR: {
		DIRECTORY_IS_EXIST: 'Directory is exist',
		FS_OPERATION_FAILED: "FS operation failed",
		FILE_IS_EXIST: "File is exist"
	}
}

export const ERRORS_CODES = {
	EEXIST: "EEXIST",
	ENOENT: "ENOENT",
}