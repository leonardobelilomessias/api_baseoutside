import { Column, Entity, PrimaryColumn } from "typeorm"
import {v4 as uuidv4} from 'uuid'

@Entity("publications_missions")
class PublicationMission{

  @PrimaryColumn()
  id:string;

  @Column()
  id_mission:string;

  @Column()
  created_at:Date;

  @Column()
  type:string;

  @Column()
  description:string

  constructor(){
    if(!this.id){
      this.id = uuidv4()
    }
  }
}
export{PublicationMission}