import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import {v4 as uuidv4} from 'uuid'
import { Agent } from './Agent'

@Entity("interests_agents")
class Interests {
  @PrimaryColumn()
  id?: string

  @Column()
  interests: string

  @ManyToOne(() => Agent)
  @JoinColumn({name:"id_agent"})
  id_agent: Agent 
  
  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }

  }
  
}
export{Interests}