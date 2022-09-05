import { Column, CreateDateColumn, Entity,PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid'

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

  @Column()
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

  @Column()
  state:number;
  
  @Column()
  image_profile:string;



  constructor() {
    if (!this.id) {
    this.id = uuidv4()
  }
}
}

export{Action}