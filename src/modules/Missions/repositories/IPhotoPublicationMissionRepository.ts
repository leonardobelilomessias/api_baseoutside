import { PhotoPublicationMission } from "../infra/typeorm/entities/PhotoPublicationMission"

interface ICreatePhotoMision{
  id_publication:string;
  content:string[]
}
interface IPhotoPublicationMissionRepository{

  create({id_publication,content}:ICreatePhotoMision):Promise<PhotoPublicationMission[]>

  list(id_publication:string):Promise<PhotoPublicationMission[]>

  delete(id_publication:string):Promise<void>
}
export{IPhotoPublicationMissionRepository,ICreatePhotoMision}