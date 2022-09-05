import { Request, Response } from "express"
import { UpdateImageAgentUseCase } from "./UpdateImageAgentUseCase"


class UpdateImageAgentController{
  private updateImageAvatarUseCase: UpdateImageAgentUseCase  
  constructor(updateImageAvatarUseCase: UpdateImageAgentUseCase) {
    this.updateImageAvatarUseCase = updateImageAvatarUseCase
  }
  async handle(request: Request, response: Response): Promise<Response> {  
    const image_profile = request.file.filename
    const { id } = request.user ||request.body
    const updateAgent = await this.updateImageAvatarUseCase.execute({ id_agent: id, image_profile:image_profile })
     return response.status(200).json(updateAgent)
  }
}
export{UpdateImageAgentController}