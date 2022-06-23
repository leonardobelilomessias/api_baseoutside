import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid'
import { Agent } from '../../Agents/Entities/Agent';

@Entity("mission")
class Mission {
  @PrimaryColumn()
  id: string;
  
  @Column()
  name: string;

  @Column()
  description: string;
  
  @Column()
  balance: number;
  
  @Column()
  image_profile?: string;
  
  @Column()
  state: string;

  @Column()
  create_by: string;

  @ManyToOne(()=>Agent)
  @JoinColumn({name:"create_by"})
  agent:Agent
  
  @CreateDateColumn()
  create_at:Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }



}

export{Mission}