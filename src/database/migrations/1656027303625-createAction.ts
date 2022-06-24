import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createAction1656027303625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "action",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length:"36",
                        isPrimary:true
                    },
                    {
                        name: "name",
                        type:"varchar"
                    },
                    {
                        name: "description",
                        type: "text",
                    },
                    {
                        name: "date_start",
                        type: "timestamp",
                        isNullable:true
                    },
                    {
                        name: "date_end",
                        type: "timestamp",
                        isNullable:true
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default:"now()"
                    },
                    {
                        name: "balance",
                        type: "decimal(15,2)",
                        default:0.00
                    },
                    {
                        name: "value",
                        type: "decimal(15,2)",
                        default:0.00
                    },
                    {
                        name: "mission",
                        type: "varchar(36)",
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_mission",
                        referencedTableName: "mission",
                        referencedColumnNames: ["id"],
                        columnNames:["mission"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("action")
    }

}
