
interface IInputCreateSponsorDTO{
	id_agent_token:string;
	id_agent: string;
	id_sponsor: string;
	type:string;
	agent_private:boolean;
	sponsor_private:boolean;
	value:number;
}

interface ICreateSponsorDTO{
	id_agent: string;
	id_sponsor: string;
	type:string;
	agent_private:boolean;
	sponsor_private:boolean
	value:number
}
interface IOutputGenericSponsorAgentDTO{
	id_agent: string;
	id_sponsor: string;
	type:string;
	agent_private:boolean;
	sponsor_private:boolean;
	value:number
}
interface IInputDeleteSponsorAgentDTO{
	id_agent_token:string;
	id_sponsor:string;
	id_agent:string;
}
interface IDeleteSponsorAgentDTO{
	id_sponsor:string;
	id_agent:string;
}
export{
  ICreateSponsorDTO,
  IInputCreateSponsorDTO,
	IOutputGenericSponsorAgentDTO,
	IInputDeleteSponsorAgentDTO,
	IDeleteSponsorAgentDTO

}
