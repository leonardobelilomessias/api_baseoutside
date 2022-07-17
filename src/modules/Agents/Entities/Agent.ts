import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'
import { Interests } from "./Interests";
import { Skills } from "./Skills";

@Entity("agent")
class Agent{
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  description: string;

  @Column()
  image_profile: string;

  @Column()
  is_active:boolean

  @CreateDateColumn()
  create_at: Date;

  @Column()
  vocation?:string



  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }


}
export {Agent}