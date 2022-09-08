import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
@Entity("admins_missions")
class AdminMission{

  @PrimaryColumn()
  id: string;

  @Column()
  id_mission:string;

  @Column()
  id_agent: string;

  @CreateDateColumn()
  created_at:Date;

  @Column()
  type: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
export{AdminMission}