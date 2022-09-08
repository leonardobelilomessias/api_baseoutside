import { Repository } from "typeorm";
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
  list(id_mission: string): Promise<PublicationMission[]> {
    throw new Error("Method not implemented.");
  }
  edit(id_publication: string): Promise<PublicationMission[]> {
    throw new Error("Method not implemented.");
  }
  delete(id_publication: string): Promise<PublicationMission> {
    throw new Error("Method not implemented.");
  }

}
export{PublicationMissionRepository}