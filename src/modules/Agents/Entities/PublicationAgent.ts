import { Column, CreateDateColumn, Entity, PrimaryColumn , ManyToOne} from "typeorm"
import{v4 as uuidv4} from 'uuid'
import { Agent } from "./Agent"

@Entity("publications_agent")
class PublicationAgent{
  
  @PrimaryColumn()
  id: string
  
  @ManyToOne(()=> Agent)
  @Column({name:"id_agent"})
  id_agent:Agent
  
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