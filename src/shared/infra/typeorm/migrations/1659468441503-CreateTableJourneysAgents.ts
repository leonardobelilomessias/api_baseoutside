import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableJourneysAgents1659468441503 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table(
                {
                    name: "journeys_agents",
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
                            name: "type",
                            type: "varchar",
                            isNullable:true
                        },

                        {
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        },

                        {
                            name: "id_content",
                            type: "varchar",
                            length:"36"
                        },
                        {
                            name: "is_hidden",
                            type: "boolean",
                            default:false
                        },
                        {
                            name: "is_private",
                            type:"boolean",
                            default:false,
                            isNullable:true
                        },
                    ],
                    foreignKeys: [
                        {
                            name: "fk_agent_journeys",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames: ["id_agent"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("journeys_agents")
    }

}
