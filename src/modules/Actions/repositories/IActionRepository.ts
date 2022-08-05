import { Action } from "aws-sdk/clients/appstream";


interface ICreateAction{
  name: string;
  description: string
  date_start: string
  date_end: string
  mission: string
  value:number
}

interface DTOActionRepository{

  create({name,description,date_start,date_end,value,mission}:ICreateAction): Promise<Action>
  
  list(): Promise<Action[]>
  
  find(): Promise<Action>
  
  edit(): Promise<Action>
  
  delete(): Promise<Action>

}

export{DTOActionRepository,ICreateAction}