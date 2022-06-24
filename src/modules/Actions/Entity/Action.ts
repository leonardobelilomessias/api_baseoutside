import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid'
import { Mission } from '../../Missions/Entities/Mission';

@Entity("action")
class Action{
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
  
  @Column()
  date_start?: Date;

  @Column()
  date_end?: Date;

  @CreateDateColumn()
  create_at: Date;
  @Column()
  value?: number;

  @Column()
  balance?:number
  
  @ManyToOne(()=>Mission)
  @JoinColumn({ name: "mission" })
  fk_mission:Mission  
  
  @Column()
  mission: string;

  
  constructor() {
    if (!this.id) {
    this.id = uuidv4()
  }
}
}

export{Action}