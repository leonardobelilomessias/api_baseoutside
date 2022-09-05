import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("departaments_actions")
class Departament{

  @PrimaryColumn()
  id: string;

  @Column()
  id_action: string;

  @Column()
  name: string;
  
  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
  
  @Column()
  agents_limit: number;

  @Column()
  agents_necessary: number;

  @Column()
  image_profile:string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export {Departament}