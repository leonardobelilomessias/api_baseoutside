import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Leo175033",
  database: "crowdforeign",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: ["./src/database/migrations/*.ts"],
  migrationsRun:true
 

  


})

AppDataSource.initialize().then(() => {
  console.log('DataBase initialized')
}).catch((err) => {
  console.log(err)
})