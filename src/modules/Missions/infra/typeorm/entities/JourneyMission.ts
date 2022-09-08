import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import{v4 as uuidv4} from 'uuid'

@Entity("journeys_mission")
class JourneyMission{

  @PrimaryColumn()
  id: string;

  @Column()
  id_mission: string;
  
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
export{JourneyMission}