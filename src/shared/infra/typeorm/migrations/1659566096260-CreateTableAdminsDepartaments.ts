import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableAdminsDepartaments1659566096260 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "admins_departaments",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            length: "36",
                            isPrimary:true
                        },
                        {
                            name: "id_agent",
                            type: "varchar",
                            length: "36",
                        },
                        {
                            name: "id_departament",
                            type: "varchar",
                            length: "36",
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
                    ],
                    foreignKeys: [
                        {
                            name: "fk_id_agent_admins_departaments",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_agent"]
                        },
                        {
                            name: "fk_id_departament_admins_departaments",
                            referencedTableName: "departaments_actions",
                            referencedColumnNames: ["id"],
                            columnNames:["id_departament"]
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("admins_departaments")
    }

}