interface IOutputWarningsTaskDTO{

    id:string;
    id_task:string;
    id_creator:string;
    title:string;
    content:string;
    priority:number;
    created_at:Date;
    type:number;
    state:number;
    is_active:boolean
}
export{IOutputWarningsTaskDTO}