import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import{v4 as uuidv4} from 'uuid'
@Entity("agents_departament")
class AgentDepartament{
  @PrimaryColumn()
  id:string

  @Column()
  id_agent:string;

  @Column()
  id_departament:string;
 
  @CreateDateColumn()
  created_at:Date;

  constructor(){
    if(!this.id){
      this.id = uuidv4()
    }
  }
}
export{AgentDepartament}