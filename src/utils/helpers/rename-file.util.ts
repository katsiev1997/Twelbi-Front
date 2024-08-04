export const renameFile = (file: File, newFileName: string): File | null => {
	if(!file) return null
	return new File([file], newFileName, { type: file.type })
}
