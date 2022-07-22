import { Column, CreateDateColumn, Entity, PrimaryColumn , ManyToOne, JoinColumn} from "typeorm"
import{v4 as uuidv4} from 'uuid'
import { Agent } from "./Agent"

@Entity("publications_agent")
class PublicationAgent{
  
  @PrimaryColumn()
  id: string
  
  @ManyToOne(()=> Agent)
  @JoinColumn({ name: "id_agent" })
  agent:Agent
  
  @CreateDateColumn()
  created_at: string
  
  @Column()
  type: string

  @Column()
  description: string

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
  
  

}
export{PublicationAgent}