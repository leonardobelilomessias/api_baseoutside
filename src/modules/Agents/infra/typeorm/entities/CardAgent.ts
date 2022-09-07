import { Column, Entity, PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid'

@Entity("card_agent")
class CardAgent{
  @PrimaryColumn()
  id:string;

  @Column()
  id_agent:string;

  @Column()
  description:string;

  @Column()
  title:string

  constructor(){
    if(!this.id){
      this.id = uuidv4()
    }
  }
}
export{
CardAgent
}