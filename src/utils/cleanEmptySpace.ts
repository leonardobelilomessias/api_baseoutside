
export  const cleanEmptySpace = (filds)=>{
  const cleanFields =new Object()
  Object.assign(cleanFields,{filds})
  for (let value  in filds){
    if(filds[value]){
      cleanFields[value] = filds[value].trim()
    }

  }
return cleanFields

}