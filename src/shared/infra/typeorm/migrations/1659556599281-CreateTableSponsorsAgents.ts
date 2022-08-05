import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableSponsorsAgents1659556599281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "sponsors_agents",
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
                            length:"36"
                        },
                        {
                            name: "id_sponsor",
                            type: "varchar",
                            length:"36"
                        },
                        {
                            name: "type",
                            type: "int",
                            default:0
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        },
                        {
                            name: "agent_private",
                            type: "boolean",
                            default:false
                        },
                        {
                            name: "sponsor_private",
                            type: "boolean",
                            default:false
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_id_agent_sponsor",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_agent"]
                        },
                        {
                            name: "fk_id_sponsor_agent",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_sponsor"]
                        }
                    ]
                }
            )
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sponsors_agents")
    }

}
