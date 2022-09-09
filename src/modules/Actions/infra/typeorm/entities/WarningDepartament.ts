import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'
@Entity("warnings_departaments")
class WarningsDepartament{

  @PrimaryColumn()
  id:string;

  @Column()
  id_departament:string;

  @Column()
  id_creator:string;

  @Column()
  title:string;

  @Column()
  content:string;

  @Column()
  priority:number;

  @CreateDateColumn()
  created_at:Date;

  @Column()
  type:number;

  @Column()
  state:number;

  @Column()
  is_active:boolean
  constructor(){
    if(!this.id){
      this.id = uuidv4()
    }
  }
}
export{WarningsDepartament}