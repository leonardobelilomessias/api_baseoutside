import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'
@Entity("warnings_missions")
class WarningsMission{

  @PrimaryColumn()
  id:string;

  @Column()
  id_mission:string;

  @Column()
  id_creator:string;

  @Column()
  title:string;

  @Column()
  content:string;

  @Column()
  priority:string;

  @CreateDateColumn()
  created_at:Date;

  @Column()
  type:number;

  @Column()
  state:number;

  @Column()
  is_active:boolean
  constructor(){
    if(!this.id){
      this.id = uuidv4()
    }
  }
}
export{WarningsMission}