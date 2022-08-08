
import { CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import{v4 as uuidv4} from 'uuid'
import { PublicationAgent } from './PublicationAgent'

@Entity("photos_publications_agents")
class PhotoPublicationAgent{

  @PrimaryColumn()
  id: string
  
  @Column()
  id_publication: string

  @Column()
  url: string
  
  @CreateDateColumn()
  created_at: string

  constructor(id_publication:string) {
    if (!this.id) {
      this.id = uuidv4()
    }
    this.id_publication =id_publication
    
    
}


}
export{PhotoPublicationAgent}