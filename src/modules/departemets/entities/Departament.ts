import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Action } from "../../Actions/Entity/Action";
import { Mission } from "../../Missions/Entities/Mission";

@Entity("departaments_actions")
class Departament{

  @PrimaryColumn()
  id: string;
  
  @ManyToOne(() => Action)
  @JoinColumn({ name: "id_action" })
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


  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }

}

export {Departament}