import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateDepartament1659461560888 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "departaments_actions",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            length:"36",
                            isPrimary:true
                        },
                        {
                            name: "id_action",
                            type: "varchar",
                            length:"36"
                        },
                        {
                            name: "name",
                            type:"varchar",
                        },
                        {
                            name: "description",
                            type:"text"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()",
                        },
                        {
                            name: "agents_limit",
                            type: "int",
                            isNullable:true
                        },
                        {
                            name: "agents_necessary",
                            type: "int",
                            default:1
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_action_departament",
                            referencedTableName:"actions",
                            referencedColumnNames: ["id"],
                            columnNames:["id_action"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("departaments_actions")
    }

}
