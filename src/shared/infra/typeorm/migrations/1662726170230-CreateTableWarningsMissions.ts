import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableWarningsMissions1662726170230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "warnings_missions",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            length: "36",
                            isPrimary:true
                        },
                        {
                            name: "id_mission",
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
                            type:"boolean",
                            default:true
                        },
                    ],
                    foreignKeys: [
                        {
                            name: "fk_id_agent_warnings_missions",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_creator"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        },
                        {
                            name: "fk_id_mission_warnings_missions",
                            referencedTableName: "missions",
                            referencedColumnNames: ["id"],
                            columnNames:["id_mission"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("warnings_missions")
    }

}
