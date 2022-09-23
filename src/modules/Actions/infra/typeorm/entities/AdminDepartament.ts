import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
@Entity("admins_missions")
class AdminDepartament{

  @PrimaryColumn()
  id: string;

  @Column()
  id_departament:string;

  @Column()
  id_agent: string;

  @CreateDateColumn()
  created_at:Date;

  @Column()
  type: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
export{AdminDepartament}