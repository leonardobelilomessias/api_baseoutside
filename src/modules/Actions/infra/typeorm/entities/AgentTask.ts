import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'
@Entity("agents_tasks")
class AgentTask{
  @PrimaryColumn()
  id:string;

  @Column()
  id_task:string;

  @Column()
  id_agent:string;

  @CreateDateColumn()
  created_at:Date;

  @Column()
  state:number;
  constructor(){
    if(!this.id){
      this.id = uuidv4()
    }
  }
}
export{AgentTask}