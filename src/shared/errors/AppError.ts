
export class AppError  {
  public readonly message: string
  public readonly statusCode: number
  constructor(message:string, statuscode=401) {
    this.message= message
    this.statusCode = statuscode
  }
}