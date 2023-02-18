import { Decimal } from "@prisma/client/runtime";

interface Agent{

    id: string;
    email: string;
    password: string;
    name: string;
    user_name:string;
    description: string;
    balance:number | Decimal
    is_active: boolean
    level: number
    image_profile: string;
    vocation: string
    created_at: Date;
    state:number
  
  }
  export {Agent}