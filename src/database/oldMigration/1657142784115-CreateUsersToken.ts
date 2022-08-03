import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersToken1657142784115 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_token",
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
                        name: "agent_id",
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
                        name: "fk_userToken",
                        referencedTableName: "agent",
                        referencedColumnNames: ["id"],
                        columnNames: ["agent_id"],
                        onDelete: "CASCADE",
                        onUpdate:"CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_token")
    }

}
