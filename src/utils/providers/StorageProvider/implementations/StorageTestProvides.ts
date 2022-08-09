import { rejects } from "assert";
import fs from "fs";
import { extname, resolve } from "path";
import { copyFile } from "../../../copyFiles";
import { IStorageProvider } from "../IStorageProvide";

class StorageTestProvider implements IStorageProvider{
  async save(file: string, folder: string): Promise<string> {
  const extension = extname(file)
    const destination = resolve('./tmp/localPhotos', `${folder}`, `${Math.random()}${extension}`, )
    await copyFile(file, destination)
    return destination
/* 
    const type = extname(file)
    const destination = resolve(`./tmp/localPhotos/${folder}/${Math.random()}${type}`,)
    const response = await copyFile(file,destination)
 
    return response */
   
  }
  async delete(file: string, folder: string): Promise<void> {

    const finalfile = file.split('\\')
    const local = resolve(__dirname, "..", "..", "..", "..",".." ,"tmp", "localPhotos", folder,`${finalfile[finalfile.length-1]}`)

   
    await fs.promises.rm(local) 
  }

}
export{StorageTestProvider}