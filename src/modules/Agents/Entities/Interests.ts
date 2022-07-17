import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import {v4 as uuidv4} from 'uuid'
import { Agent } from './Agent'

@Entity("interests_agent")
class Interests {
  @PrimaryColumn()
  id?: string

  @Column()
  interests: string

  @ManyToOne(() => Agent)
  @JoinColumn({name:"id_agent"})
  id_agent: Agent
  
  constructor(id_agent,interests) {
    if (!this.id) {
      this.id = uuidv4()
    }
    this.id_agent = id_agent
    this.interests = interests
  }
  
}
export{Interests}