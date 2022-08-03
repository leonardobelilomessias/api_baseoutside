import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne,PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid'
import { Mission } from '../../Missions/Entities/Mission';
@Entity("actions")
class Action{
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  local?: string;

  @ManyToOne(()=>Mission)
  @JoinColumn({name:"id_mission"})
  id_mission: string;  
  
  @CreateDateColumn()
  created_at: Date;
  
  @Column()
  date_start?: Date;

  @Column()
  date_end?: Date;

  @Column()
  is_active?: boolean;

  @Column()
  type?:number
  


  constructor() {
    if (!this.id) {
    this.id = uuidv4()
  }
}
}

export{Action}