import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import{v4 as uuidv4} from 'uuid'

@Entity("skills_agents")
class Skills{

  @PrimaryColumn()
  id: string

  @Column()
  skill: string

  @Column()
  id_agent: string
  
  constructor() {
    if (!this.id) {
      this.id= uuidv4()
    }
  }
}
export{Skills}