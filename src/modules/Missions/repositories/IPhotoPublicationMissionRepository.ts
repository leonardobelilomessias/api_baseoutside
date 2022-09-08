import { PhotoPublicationMission } from "../infra/typeorm/entities/PhotoPublicationMission"

interface IPhotoPublicationRepository{

  create({id_publication,url}):Promise<PhotoPublicationMission>

  list(id_publication:string):Promise<PhotoPublicationMission[]>

  delete(id_publication:string):Promise<PhotoPublicationMission>
}
export{IPhotoPublicationRepository}