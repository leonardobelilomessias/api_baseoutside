import { IInputCreateAgentDTO, IEditAgentDTO, IResponseAgentDTO, IOutputGenericAgentDTO } from "../../../DTOS/IAgentDTOS";
import { IAgentRepository } from "../../../repositories/IAgentRepository";
import { Agent } from "../entities/Agent";
import {PrismaClient} from '@prisma/client'


class AgentRepository  implements IAgentRepository{
    agentRepository:PrismaClient
    constructor(){
        this.agentRepository = new PrismaClient()
    }
    searchAgentsByname(name: string): Promise<Agent[] | IOutputGenericAgentDTO[]> {
        throw new Error("Method not implemented.");
    }

    async create({ name, email, password,user_name }: IInputCreateAgentDTO): Promise<Agent> {
        const prisma = this.agentRepository
        try{

            const agent=  await this.agentRepository.agents.create({
                data:{
                    name:name,
                    email:email,
                    password:password,
                    user_name:user_name
                }
            })
            
            return agent 
        }catch(e){
            console.log(e)
        }
    }
    listAll(): Promise<Agent[]> {
        throw new Error("Method not implemented.");
    }
    deactivate({ id, password }: { id: any; password: any; }): Promise<Agent> {
        throw new Error("Method not implemented.");
    }
    activate({ email }: { email: any; }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    edit({ id, description, email, name, skills, interests, image_profile }: IEditAgentDTO): Promise<IResponseAgentDTO> {
        throw new Error("Method not implemented.");
    }
    findByEmail({ email }: { email: any; }): Promise<Agent> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Agent> {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Promise<Agent> {
        throw new Error("Method not implemented.");
    }
    findBySkills(skill: string[]): Promise<Agent[]> {
        throw new Error("Method not implemented.");
    }
    findByInterest(interest: string[]): Promise<Agent[]> {
        throw new Error("Method not implemented.");
    }
    findByVocation({ vocation }: { vocation: string; }): Promise<Agent[]> {
        throw new Error("Method not implemented.");
    }
    resetPassword({ id_agent, password }: { id_agent: any; password: any; }): Promise<Agent> {
        throw new Error("Method not implemented.");
    }
    findByUserName(user_name: string): Promise<Agent> {
        
        throw new Error("Method not implemented.");
    }
    fetchAgentProfile(id_agent: any) {
        throw new Error("Method not implemented.");
    }

}
export{AgentRepository}