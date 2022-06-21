import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'

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
  describe: string;

  @Column()
  image_profile: string;

  @CreateDateColumn()
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }


}