import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'
@Entity("warnings_actions")
class WarningsAction{

  @PrimaryColumn()
  id:string;

  @Column()
  id_action:string;

  @Column()
  id_creator:string;

  @Column()
  title:string;

  @Column()
  content:string;

  @Column()
  priority:number;

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
export{WarningsAction}