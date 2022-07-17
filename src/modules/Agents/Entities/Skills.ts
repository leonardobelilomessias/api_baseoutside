import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Agent } from "./Agent";
import{v4 as uuidv4} from 'uuid'

@Entity("skills_agent")
class Skills{

  @PrimaryColumn()
  id: string

  @Column()
  skill: string

  @ManyToOne(() => Agent)
  @JoinColumn({name:"id_agent"})
  id_agent: Agent
  constructor(id_agent,skill) {
    if (!this.id) {
      this.id= uuidv4()
    }
    this.id_agent = id_agent
    this.skill = skill
    
  }
}
export{Skills}