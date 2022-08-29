import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableAgentsMisions1659469637235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "agents_missions",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            length: "36",
                            isPrimary:true
                        },
                        {
                            name: "id_mission",
                            type: "varchar",
                            length:"36"
                        },
                        {
                            name: "id_agent",
                            type: "varchar",
                            length: "36",
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_agent_join_mission",
                            referencedTableName: "agents",
                            referencedColumnNames:["id"],
                            columnNames: ["id_agent"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                            
                        },
                        {
                            name: "fk_mission_get_agent",
                            referencedTableName: "missions",
                            referencedColumnNames:["id"],
                            columnNames: ["id_mission"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                            
                        }
                       
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agents_missions")
    }

}
