import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableAgentsActions1659561350795 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "agents_actions",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            length: "36",
                            isPrimary:true
                        },
                        {
                            name: "id_action",
                            type: "varchar",
                            length:"36"
                        },
                        {
                            name: "id_agent",
                            type: "varchar",
                            length:"36"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        }

                    ],
                    foreignKeys: [
                        {
                            name: "fk_id_agent_agents_actions",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_agent"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        },
                        {
                            name: "fk_id_action_agents_actions",
                            referencedTableName: "actions",
                            referencedColumnNames: ["id"],
                            columnNames:["id_action"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agents_actions")
    }

}
