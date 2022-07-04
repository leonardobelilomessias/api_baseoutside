import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTasks1656959070564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "task",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "36",
                        isPrimary:true
                    },
                    {
                        name: "description",
                        type:"text"
                    },
                    {
                        name: "title",
                        type:"varchar",
                    },
                    {
                        name: "status_current",
                        type: "bool",
                        default:true
                    },
                    {
                        name: "id_action",
                        type: "varchar",
                        length:"36"
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default:"now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_action_task",
                        referencedTableName: "action",
                        referencedColumnNames: ["id"],
                        columnNames:["id_action"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("task")
    }

}
