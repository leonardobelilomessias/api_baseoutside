import { Entity, PrimaryColumn,Column, CreateDateColumn, ManyToMany, JoinColumn, ManyToOne, JoinTable } from 'typeorm'
import {v4 as uuidv4} from 'uuid'
import { Action } from '../../../../actions/infra/typeorm/entities/Action';
import { Departament } from '../../../../departemets/infra/typeorm/entities/Departament';
import { Mission } from '../../../../Missions/infra/typeorm/entities/Mission';


@Entity("tasks_departamets")
class Task{
  @PrimaryColumn()
  id: string;

  @ManyToOne(()=>Departament)
  @JoinColumn({ name: "id_departament" })
  id_departament: string;

  @ManyToOne(()=>Action)
  @JoinColumn({ name: "id_action" })
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

export {Task}