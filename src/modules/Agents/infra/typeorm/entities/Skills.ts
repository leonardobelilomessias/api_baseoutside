import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Agent } from "./Agent";
import{v4 as uuidv4} from 'uuid'

@Entity("skills_agents")
class Skills{

  @PrimaryColumn()
  id: string

  @Column()
  skill: string

  @ManyToOne(() => Agent)
  @JoinColumn({name:"id_agent"})
  id_agent: Agent 
  
  constructor() {
    if (!this.id) {
      this.id= uuidv4()
    }

  }
}
export{Skills}