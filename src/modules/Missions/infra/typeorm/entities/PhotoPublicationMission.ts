import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid'
@Entity("photos_publications_missions")
class PhotoPublicationMission{

  @PrimaryColumn()
  id:string;

  @Column()
  id_publication:string;

  @Column()
  url:string;

  @Column()
  created_at:string;

  constructor(){
    if(!this.id){
      this.id = uuidv4()
    }
  }
}
export{PhotoPublicationMission}