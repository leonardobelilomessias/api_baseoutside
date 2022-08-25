import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import { AppError } from "../../../../shared/errors/AppError";
dayjs.extend(utc);
class DateProvider{
  
 static convertToUtc(date){
    return  dayjs(date).utc().local().format()
  }

  static compairInHours(date_start, date_end){
    const dateStartUtc = this.convertToUtc(date_start)
    const dateEndUtc= this.convertToUtc(date_end)
    return dayjs(dateStartUtc).diff(dateEndUtc,"hours")
  }
  static dateNow(){
    return dayjs().utc().local().format()
  }
}
export{DateProvider}