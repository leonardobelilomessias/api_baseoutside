import fs from 'fs'


export const copyFile =function(origin:string,destination:string){
  
  const read = fs.createReadStream(origin)
  read.on("error", (err) => {
    console.log(err)
  })
  const writer = fs.createWriteStream(destination)
  writer.on("error", (err) => {
    console.log(err)
  })

 read.pipe(writer)
}