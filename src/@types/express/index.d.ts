/*declare namespace Express{
  export interface Request{
    user: {
      id?: string;
    }
  }
};
*/
import * as express from "express"
declare global {
    namespace Express {
        interface Request {
            user? : Record<string,any>
        }
    }
}