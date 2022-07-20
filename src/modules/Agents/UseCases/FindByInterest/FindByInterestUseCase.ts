import { InterestsRepository } from "../../Repository/InterestsRepository"

class FindByInterestUseCase{
  private interestRepository: InterestsRepository
  constructor(interestRepository:InterestsRepository) {
    this.interestRepository = interestRepository
  }
  async execute({interest}) {
    const userByInterest = await this.interestRepository.findByInterest(interest)
    return userByInterest
  }

}
export{FindByInterestUseCase}