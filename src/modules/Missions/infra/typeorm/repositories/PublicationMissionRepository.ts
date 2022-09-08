import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IPhotoPublicationMissionRepository } from "../../../repositories/IPhotoPublicationMissionRepository";
import { IPublicationMission, IResponsePublicationMission } from "../../../repositories/IPublicationMissionRepository";
import { PhotoPublicationMission } from "../entities/PhotoPublicationMission";
import { PublicationMission } from "../entities/PublicationMission";
import { PhotoPublicationMissionRepository } from "./PhotoPublicationMissionRepository";


class PublicationMissionRepository implements IPublicationMission{
  private publicationMissionRepository:Repository<PublicationMission>
  private photoPublicationMissionRepository:IPhotoPublicationMissionRepository
  constructor(photoPublicationMissionRepository:IPhotoPublicationMissionRepository){
    this.publicationMissionRepository = AppDataSource.getRepository(PublicationMission)
    this.photoPublicationMissionRepository = photoPublicationMissionRepository
  }
  async   create({id_mission,type,description,content}):Promise<IResponsePublicationMission> {
    const newPublication = new PublicationMission()
    Object.assign(newPublication,{id_mission,type,description})
    const createdPublication = await this.publicationMissionRepository.save(newPublication)
    const photos = await this.photoPublicationMissionRepository.create({id_publication:createdPublication.id,content})
    Object.assign(createdPublication)
    return {publication:createdPublication,photos}
  }
 async  list(id_mission: string){
  const publicationByIdAgent = await this.publicationMissionRepository.find({
    where:{id_mission:id_mission}
  })
  const fullPublications = await publicationByIdAgent.map(async (publication)=>{
    const photo = await this.photoPublicationMissionRepository.list(publication.id)
    const urlPhotos = photo.map(onePhoto=>(onePhoto.url))
    return {publication:publication,  photos:urlPhotos}
  })
  return Promise.all(fullPublications) 

  }
  async edit({id_publication,description}): Promise<PublicationMission> {
    const findPublication = await this.publicationMissionRepository.findOne({where:{id:id_publication}})
    if(!findPublication) throw new AppError("Publication not found.")
    Object.assign(findPublication,{description})
    const editedPublication = await this.publicationMissionRepository.save(findPublication)
    
    return editedPublication
  }
  async delete(id_publication: string): Promise<PublicationMission> {
    await this.photoPublicationMissionRepository.delete(id_publication)
    const findPublication= await this.publicationMissionRepository.findOneBy({id:id_publication})
    if(!findPublication) throw new AppError("Publication not found.")
    const deletedPublication = await this.publicationMissionRepository.createQueryBuilder()
    .delete()
    .from("publications_missions")
     .where("id = :id_publication", { id_publication:id_publication})
    .execute()
    return findPublication
  }

}
export{PublicationMissionRepository}