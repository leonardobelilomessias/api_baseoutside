import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class mission1656014397876 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "mission",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length:"36"
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "text",
                    },
                    {
                        name: "balance",
                        type: "decimal(15,2)",
                        default:0.00
                    },
                    {
                        name: "image_profile",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "state",
                        type: "varchar",
                        default:"'ativo'"
                    },
                    {
                        name: "create_by",
                        type:"varchar(36)"
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default:"now()"
                    }

                ],
                foreignKeys: [
                    {
                        name: "fk_agent",
                        referencedTableName: "agent",
                        referencedColumnNames: ["id"],
                        columnNames: ["create_by"],
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("mission")
    }


}
