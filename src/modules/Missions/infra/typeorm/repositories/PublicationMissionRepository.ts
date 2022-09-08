import { Repository } from "typeorm";
import { IPublicationMission } from "../../../repositories/IPublicationMissionRepository";
import { PublicationMission } from "../entities/PublicationMission";

class PublicationMissionRepository implements IPublicationMission{
  private publicationMissionRepository:Repository<PublicationMission>
  constructor(publicationMissionRepository:Repository<PublicationMission>){
    this.publicationMissionRepository = publicationMissionRepository
  }
  create({ id_mission, type, description }: { id_mission: any; type: any; description: any; }): Promise<PublicationMission> {
    throw new Error("Method not implemented.");
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