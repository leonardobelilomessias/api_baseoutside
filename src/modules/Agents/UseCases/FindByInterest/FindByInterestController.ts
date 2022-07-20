import { Request, Response } from "express";
import { FindByInterestUseCase } from "./FindByInterestUseCase";

class FindyByInterestController{
  private findeByInterestUseCase: FindByInterestUseCase
  constructor(findByInterestUseCase: FindByInterestUseCase) {
    this.findeByInterestUseCase = findByInterestUseCase
  }
  async handle(request:Request,response:Response) {
    const { interest } = request.body
    const usersByInterest = await this.findeByInterestUseCase.execute(interest)
    return response.status(200).json(usersByInterest)
  }
}
export{ FindyByInterestController}