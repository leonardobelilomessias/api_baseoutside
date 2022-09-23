

interface ICreateJourneyAgent{
  id_agent:string;
  type:string;
  id_content:string;
  is_hidden?:boolean;
  is_private?:boolean;

}
export{ICreateJourneyAgent}