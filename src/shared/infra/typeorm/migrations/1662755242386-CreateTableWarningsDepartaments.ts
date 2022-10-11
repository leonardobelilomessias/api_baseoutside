import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableWarningsDepartaments1662755242386 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "warnings_departaments",
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
                            name: "fk_id_agent_warning_departaments",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_creator"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        },
                        {
                            name: "fk_id_departament_warnings_departaments",
                            referencedTableName: "departaments_actions",
                            referencedColumnNames: ["id"],
                            columnNames:["id_departament"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable( "warnings_departaments")
    }

}
