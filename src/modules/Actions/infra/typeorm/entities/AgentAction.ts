import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import{v4 as uuidv4} from 'uuid';

@Entity("agents_actions")
class AgentAction{

  @PrimaryColumn()
  id:string;

  @Column()
  id_action:string;

  @Column()
  id_agent:string;

  @CreateDateColumn()
  created_at:Date;

 constructor(){
  if(!this.id){
    this.id = uuidv4()
  }
 }

}
export{AgentAction}