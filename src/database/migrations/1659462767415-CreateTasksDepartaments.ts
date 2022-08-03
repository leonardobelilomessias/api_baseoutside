import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTasksDepartaments1659462767415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tasks_departamets",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "36",
                        isPrimary:true
                    },
                    {
                        name: "id_departament",
                        type: "varchar",
                        length:"36"
                    },
                    {
                        name: "id_action",
                        type: "varchar",
                        length:"36"
                    },
                    {
                        name: "id_mission",
                        type: "varchar",
                        length:"36"
                    },
                    {
                        name: "title",
                        type:"varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default:"now()"
                    },
                    {
                        name: "description",
                        type:"text"
                    },
                    {
                        name: "local",
                        type: "varchar",
                        isNullable:true
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
                    },

                    {
                        name: "agents_necessary",
                        type: "int",
                        default:1
                    },
                    
                    {
                        name: "agents_limit",
                        type: "int",
                        isNullable:true
                    },
                    {
                        name: "priority",
                        type: "int",
                        default:0
                    },
                    {
                        name: "date_limit_subscribe",
                        type: "timestamp",
                        isNullable:true
                    },
                    {
                        name: "is_require_skill",
                        type: "boolean",
                        default:false
                    },
                    {
                        name: "skill_require",
                        type: "varchar",
                        isNullable:true
                    }


                ],
                foreignKeys: [
                    {
                        name: "fk_mission_task_departament",
                        referencedTableName: "missions",
                        referencedColumnNames: ["id"],
                        columnNames:["id_mission"]
                    },
                    {
                        name: "fk_action_task_departament",
                        referencedTableName: "actions",
                        referencedColumnNames: ["id"],
                        columnNames:["id_action"]
                    },
                    {
                        name: "fk_departemant_task",
                        referencedTableName: "departaments_actions",
                        referencedColumnNames: ["id"],
                        columnNames:["id_departament"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tasks_departamets")
    }

}
