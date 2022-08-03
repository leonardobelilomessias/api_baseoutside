import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableNoticesActions1659565646366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "notices_actions",
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
                            length: "36",
                        },
                        {
                            name: "id_creator",
                            type: "varchar",
                            length: "36",
                        },
                        {
                            name: "title",
                            type:"varchar"
                        },
                        {
                            name: "content",
                            type:"text"
                        },
                        {
                            name: "priority",
                            type: "int",
                            default:0
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
                            type:"boolean"
                        },
                    ],
                    foreignKeys: [
                        {
                            name: "fk_id_agent_notices_actions",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_creator"]
                        },
                        {
                            name: "fk_id_action_notices_actions",
                            referencedTableName: "actions",
                            referencedColumnNames: ["id"],
                            columnNames:["id_action"]
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("notices_actions")
    }

}
