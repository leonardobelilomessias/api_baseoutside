
import { CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import{v4 as uuidv4} from 'uuid'
import { PublicationAgent } from './PublicationAgent'

@Entity("photos_publication_agent")
class PhotoPublicationAgent{

  @PrimaryColumn()
  id: string
  
  @ManyToOne(()=>PublicationAgent)
  @JoinColumn({name:"id_publication"})
  id_publication: PublicationAgent

  @Column()
  url: string
  
  @CreateDateColumn()
  created_at: string

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
    
    
}


}
export{PhotoPublicationAgent}