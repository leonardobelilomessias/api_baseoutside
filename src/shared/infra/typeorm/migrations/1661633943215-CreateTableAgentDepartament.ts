import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableAgentDepartament1661633943215 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name:"agents_departament",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        length:"36",
                        isPrimary:true
                    },
                    {
                        name:"id_agent",
                        type:"varchar",
                        length:"36"
                    },
                    {
                        name:"id_departament",
                        type:"varchar",
                        length:"36"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ],
                foreignKeys:[
                    {
                        name: "fk_id_agent_agents_departament",
                        referencedTableName: "agents",
                        referencedColumnNames: ["id"],
                        columnNames:["id_agent"]
                    },
                    {
                        name: "fk_id_departament_agents_actions",
                        referencedTableName: "departaments_actions",
                        referencedColumnNames: ["id"],
                        columnNames:["id_departament"]
                    },
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agents_departament")
    }

}
