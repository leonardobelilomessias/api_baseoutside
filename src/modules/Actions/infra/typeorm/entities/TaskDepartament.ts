import { Entity, PrimaryColumn,Column, CreateDateColumn } from 'typeorm'
import {v4 as uuidv4} from 'uuid'


@Entity("tasks_departamets")
class TaskDepartament{
  @PrimaryColumn()
  id: string;

  @Column()
  id_departament: string;

  @Column()
  id_action: string;
  
  @Column()
  id_mission: string;

  @Column()
  title: string;

  @CreateDateColumn()
  created_at?: Date;

  @Column()
  description: string;

  @Column()
  local?: string;

  @Column()
  is_active?: boolean;

  @Column()
  state?:number;

  @Column()
  agents_necessary?: number;

  @Column()
  agents_limit?: number;
  
  @Column()
  priority: number;

  @Column()
  date_limit_subscribe?: Date;

  @Column()
  is_require_skill: boolean;

  @Column()
  skill_require?:string

  constructor() {
    if (!this.id) {
    this.id = uuidv4()
  }
  } 

}

export {TaskDepartament}