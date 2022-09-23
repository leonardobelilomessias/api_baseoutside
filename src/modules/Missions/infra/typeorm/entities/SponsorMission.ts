import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'
@Entity("sponsors_missions")
class SponsorMission{
  @PrimaryColumn()
  id: string;
  
  @Column()
  id_mission: string;
  
  @Column()
  id_sponsor: string;

  @Column()
  type: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  value:number;

  @Column()
  sponsor_private: boolean;

  @Column()
  mission_private: boolean;


  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
    
  }
}
export{SponsorMission}