import { Column, CreateDateColumn, Entity,PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("sponsors_agents")
class SponsorAgent{
  @PrimaryColumn()
  id: string;

  @Column()
  id_agent: string;
  
  @Column()
  id_sponsor: string;

  @Column()
  type: string;
  
  @CreateDateColumn()
  created_at: Date;

  @Column()
  agent_private:boolean;

  @Column()
  sponsor_private: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }

}

export{SponsorAgent}