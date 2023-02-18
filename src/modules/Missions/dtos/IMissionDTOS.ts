interface IOutputMissionDTO {
    id: string;
    name: string;
    identifier:string;
    creator: string;
    description: string;
    local?:string
    state?: number
    balance: number;
    is_active?: boolean
    level?:number
    image_profile?: string;
    duration?: number
    date_start?: Date
    date_end?: Date
    is_private: boolean
    type?: number
    created_at:Date
    field?:string
}
export {IOutputMissionDTO}
