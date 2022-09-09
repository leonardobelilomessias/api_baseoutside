import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'

@Entity("card_mission")
class CardMission{
  
  @PrimaryColumn()
  id:string;

  @Column()
  id_mission:string;

  @Column()
  title:string;

  @Column()
  description:string;

  constructor(){
    if(!this.id){
      this.id = uuidv4()
    }
  }
  
}
export{CardMission}