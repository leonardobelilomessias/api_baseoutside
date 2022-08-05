import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid'
import { Agent } from '../../../../agents/infra/typeorm/entities/Agent';


@Entity("missions")
class Mission {
  @PrimaryColumn()
  id: string;
  
  @Column()
  name: string;

  @ManyToOne(()=>Agent)
  @JoinColumn({name:"creator"})
  creator: string;

  @Column()
  description: string;
  
  @Column()
  local?:string

  @Column()
  state?: number
  
  @Column()
  balance: number;

  @Column()
  is_active?: boolean
  
  @Column()
  level?:number
  
  @Column()
  image_profile?: string;

  @Column()
  duration?: number
  
  @Column()
  date_start?: Date
  
  @Column()
  date_end?: Date
  
  @Column()
  is_private: boolean
  
  @Column()
  type?: number
  
  
  @CreateDateColumn()
  created_at:Date
  
  @Column()
  field?:string
  
  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export{Mission}