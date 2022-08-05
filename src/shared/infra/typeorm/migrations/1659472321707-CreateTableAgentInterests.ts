import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTableAgentInterests1659472321707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createTable(
            new Table(
                {
                    name: "interests_agents",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            isPrimary:true
                        },
                        {
                            name: "interests",
                            type:"varchar"
                        },
                        {
                            name: "id_agent",
                            type: "varchar"
                        }
                    ]
                }
            )
         )
        
             await queryRunner.createForeignKey("interests_agents",
                 new TableForeignKey(
                     {
                    name: "fk_agent_interests",
                    columnNames: ["id_agent"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "agents",
                    onDelete: "CASCADE",
                    onUpdate:"CASCADE"
                    }
                )
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("interests_agents", "fk_agent")
        await queryRunner.dropTable("interests_agents")
    }

}
