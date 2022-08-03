import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Agent } from "./Agent";
import{v4 as uuidv4} from 'uuid'

@Entity("journeys_agents")
class JourneyAgent{

  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Agent)
  @JoinColumn({ name: "id_agent" })
  id_agent: string;
  
  @Column()
  type: string;
  
  @Column()
  description: string;
  
  @CreateDateColumn()
  created_at: Date;
  
  @Column()
  last_update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }


}
export{JourneyAgent}