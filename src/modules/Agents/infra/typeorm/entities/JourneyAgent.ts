import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Agent } from "./Agent";
import{v4 as uuidv4} from 'uuid'

@Entity("journeys_agents")
class JourneyAgent{

  @PrimaryColumn()
  id: string;

  @Column()
  id_agent: string;
  
  @Column()
  type: string;
  
  @Column()
  id_content: string;
  
  @CreateDateColumn()
  created_at: Date;

  @Column()
  is_private:boolean;

  @Column()
  is_hidden:boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }


}
export{JourneyAgent}