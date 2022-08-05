import { InterestsRepository } from "../../infra/typeorm/repositories/InterestsRepository";
import { FindyByInterestController } from "./FindByInterestController";
import { FindByInterestUseCase } from "./FindByInterestUseCase";


const interestRepository = new InterestsRepository()
const findByInterestUseCase = new FindByInterestUseCase(interestRepository)
const findyByInterestController = new FindyByInterestController(findByInterestUseCase)

export{findyByInterestController}
