import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableColabsAgents1659566403289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "colabs_agents",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            length: "36",
                            isPrimary:true
                        },
                        {
                            name: "id_agent",
                            type: "varchar",
                            length: "36",
                        },
                        {
                            name: "id_agent_colab",
                            type: "varchar",
                            length: "36",
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        },
                        {
                            name: "type",
                            type: "int",
                            default:0
                        },
                        {
                            name: "state",
                            type: "int",
                            default:0
                        },
                        {
                            name: "is_active",
                            type: "int",
                            default:0
                        },
                    ],
                    foreignKeys: [
                        {
                            name: "fk_id_agent_colabs_agents",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_agent"]
                        },
                        {
                            name: "fk_id_colabs_colabs_agents",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_agent"]
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("colabs_agents")
    }

}
