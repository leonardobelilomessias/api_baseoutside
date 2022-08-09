import fs from 'fs'


export const copyFile =async function(origin:string,destination:string){
  fs.copyFileSync(origin,destination)
  /* const read = await fs.createReadStream(origin)
  read.on("error", (err) => {
    console.log(err)
  })
  const writer = await fs.createWriteStream(destination)
  writer.on("error", (err) => {
    console.log(err)
  })

  const data = await read.pipe(writer)
  writer.on('close', (data) => {
    return data
  })
  return data.toString() */
}