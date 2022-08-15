interface IUpdateMission{
  id?: string;
  name?: string;
  description?: string;
  creator?: string,
  local?:string
  image_profile?: string;
  duration?: number;
  date_start?: Date;
  date_end?: Date;
  is_private?: boolean;
  type?: number;
  field?: string;

}
export{IUpdateMission}