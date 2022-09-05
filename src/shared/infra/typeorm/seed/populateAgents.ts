import "reflect-metadata";
import { DataSource, Repository } from "typeorm";
import { Agent } from "../../../../modules/Agents/infra/typeorm/entities/Agent";
import '../../typeorm';
import { faker } from '@faker-js/faker';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.USER_DATABASE ,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.DB_NAME, 
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
    name: faker.name.fullName(),
    user_name:faker.internet.userName(),
  };
}
Array.from({ length: 10 }).forEach(() => {
  agents.push(createRandomUser());
});
  const newAgents = agents.map((agents) => { 
    const agent = new Agent()
    const {name,email,password,user_name} = agents
    Object.assign(agent, { name, email, password,user_name })
    return agent
})
await repository.createQueryBuilder()
  .insert()
  .into(Agent)
  .values(newAgents)
  .execute()
}
