export const PATH = {
	CREATE_FILE: 'files/fresh.txt',
	COPY_FOLDER_SOURCE: 'files',
	COPY_FOLDER_DESTINATION: 'files_copy',
	RENAME_FILE_SOURCE: 'files/wrongFilename.txt',
	RENAME_FILE_DESTINATION: 'files/properFilename.txt',
	REMOVE_FILE: 'files/fileToRemove.txt',
	LOGGER_LIST: 'files',
	READ_FILE: 'files/fileToRead.txt'
}

export const CONTEXT = {
	CREATE_FILE: 'I am fresh and young'
}

export const ERROR = {
	CREATE_FILE: {CONTEXT: 'FS operation failed', CODE: 'ENOENT'},
	COPY_FOLDER: {CONTEXT: 'FS operation failed', CODE: 'ENOENT'},
	RENAME_FILE: {CONTEXT: 'FS operation failed', CODE: 'ENOENT'},
	REMOVE_FILE: {CONTEXT: 'FS operation failed', CODE: null},
	LOGGER_LIST: {CONTEXT: 'FS operation failed', CODE: null},
	READ_FILE: {CONTEXT: 'FS operation failed', CODE: null},
}
