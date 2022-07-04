import { Entity, PrimaryColumn,Column, CreateDateColumn, ManyToMany, JoinColumn, ManyToOne, JoinTable } from 'typeorm'
import {v4 as uuidv4} from 'uuid'
import { Action } from '../../Actions/Entity/Action';



@Entity("task")
class Task{
  @PrimaryColumn()
  id: string;
  
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status_current?: Boolean;
  
  @CreateDateColumn()
  create_at?: Date;

  @ManyToOne(()=>Action)
  @JoinColumn({ name: "id_action" })
  fk_action_task:Action 

  @Column()
  id_action:string
  constructor() {
    if (!this.id) {
    this.id = uuidv4()
  }
  } 

}

export {Task}