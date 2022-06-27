import { Request, Response } from "express"
import { UpdateImageAgentUseCase } from "./UpdateImageAgentUseCase"


class UpdateImageAgentController{
  private updateImageAvatarUseCase: UpdateImageAgentUseCase
  
  constructor(updateImageAvatarUseCase: UpdateImageAgentUseCase) {
    this.updateImageAvatarUseCase = updateImageAvatarUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
   
    const image_profile = request.file.filename
   
    const { id } = request.user
   
    this.updateImageAvatarUseCase.execute({ user_id: id, image_profile })
    
    return response.status(204).send()
    
  }


}
export{UpdateImageAgentController}