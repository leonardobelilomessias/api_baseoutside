import "reflect-metadata";
import { DataSource, Repository } from "typeorm";
import { Agent } from "../../../../modules/agents/infra/typeorm/entities/Agent";
import '../../typeorm';
import { faker } from '@faker-js/faker';


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Leo175033",
  database: "db_holdrope",
  entities: [Agent],
  migrations: ["./src/database/migrations/*.ts"],

})

AppDataSource.initialize().then(() => { console.log('DataBase initialized') })
  .then(async (menager) => {
    const agentRepository = AppDataSource.getRepository(Agent)
    create(agentRepository).then(()=>{console.log("fake agents created")})
  })
  .catch((err) => { console.log(err) })




async function create(repository:Repository<Agent>) {
  const agents = [];
  function createRandomUser() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name:faker.internet.userName(),
  };
}
Array.from({ length: 10 }).forEach(() => {
  agents.push(createRandomUser());
});
  const newAgents = agents.map((agents) => { 
    const agent = new Agent()
    const {name,email,password} = agents
    Object.assign(agent, { name, email, password })
    return agent
})
await repository.createQueryBuilder()
  .insert()
  .into(Agent)
  .values(newAgents)
  .execute()

}
