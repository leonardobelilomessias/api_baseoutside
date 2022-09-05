import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'
import { Agent } from "./Agent";
@Entity("colabs_agents")
class ColabAgent{
  @PrimaryColumn()
  id: string;

  @Column()
  id_agent: string

  @Column()
  id_colab: string

  @CreateDateColumn()
  created_at: Date;

  @Column()
  type: number;

  @Column()
  state: number;

  @Column()
  is_active: number;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }

}
export{ColabAgent}