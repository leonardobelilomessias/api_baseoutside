import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'


@Entity("agents")
class Agent{
  @PrimaryColumn()
  id?: string;
  
  @Column()
  email: string;
  
  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  user_name:string;

  @Column()
  description: string;

  @Column()
  balance:number

  @Column()
  is_active: boolean
  
  @Column()
  level: number
  
  @Column()
  image_profile: string;
  
  
  @Column()
  vocation: string
    
  @CreateDateColumn()
  created_at: Date;

  @Column()
  state:number



  constructor() {
    if (!this.id) {
      this.id = uuidv4()
      this.vocation = null
      this.is_active = true
      this.image_profile=null
    }
  }


}
export {Agent}