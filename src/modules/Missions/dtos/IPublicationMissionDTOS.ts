interface IInputCreatePublicationDTO{
  id_agent_token:String
  id_mission:string;
  description:string;
  type:string;
  content:string[]
}
interface IOutputCreatePublicationMissionDTO{
  id:string;
  id_mission:string;
  created_at:Date;
  type:string;
  description:string

}
interface IInputDeletePublicationMissionDTO{
  id_publication:string;
  id_agent_token:string;
}
interface IOutputGenericPublicationMissionDTO{
  id:string
  id_mission:string;
  description:string;
  type:string;
  created_at:Date

}
interface IInputEditPublicationMissionDTO{
  id_agent_token:string;
  id_publication:string;
  description?:string;
}

export{
  IInputCreatePublicationDTO,
  IOutputCreatePublicationMissionDTO,
  IInputDeletePublicationMissionDTO,
  IOutputGenericPublicationMissionDTO,
  IInputEditPublicationMissionDTO

}