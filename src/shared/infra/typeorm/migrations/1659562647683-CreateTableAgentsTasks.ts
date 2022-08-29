import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableAgentsTasks1659562647683 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "agents_tasks",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            length: "36",
                            isPrimary:true
                        },
                        {
                            name: "id_task",
                            type: "varchar",
                            length:"36"
                        },                        {
                            name: "id_agent",
                            type: "varchar",
                            length:"36"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        },
                        {
                            name: "is_active",
                            type: "boolean",
                            default:true
                        },
                        {
                            name: "state",
                            type: "int",
                            default:0
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_id_agent_agents_tasks",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_agent"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        },
                        {
                            name: "fk_id_task_agents_tasks",
                            referencedTableName:"tasks_departamets",
                            referencedColumnNames: ["id"],
                            columnNames:["id_task"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agents_tasks")
    }

}
