import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableAgentsTokens1659567465655 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "agents_tokens",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "36",
                        isPrimary:true
                    },
                    {
                        name: "refresh_token",
                        type:"varchar"
                    },
                    {
                        name: "id_agent",
                        type: "varchar",
                        length:"36"
                    },
                    {
                        name: "expires_date",
                        type:"timestamp"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default:"now()"
                    }

                ],
                foreignKeys: [
                    {
                        name: "fk_id_agent_agents_tokens",
                        referencedTableName: "agents",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_agent"],
                        onDelete: "CASCADE",
                        onUpdate:"CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agents_tokens")
    }


}
