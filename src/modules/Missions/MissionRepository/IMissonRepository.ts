import { Mission } from "../Entities/Mission";

interface ICreateMission{
  name: string;
  description: string;
  creator: string,
  image_profile?: string;

}


interface IMissionReposiotry{

  create({name,description,creator,image_profile}:ICreateMission): Promise<Mission>
  
  list(): Promise<Mission[]>

  findByName({name}): Promise<Mission>
  
  edit({ data }): Promise<Mission>
  
  deactivate({ id }): Promise<Mission>
  
  
}

export {IMissionReposiotry, ICreateMission}