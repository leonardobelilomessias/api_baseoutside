import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableAdinsMission1659563958287 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "admins_missions",
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
                            name: "id_mission",
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
                            name: "fk_id_agent_admins_missions",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_agent"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        },
                        {
                            name: "fk_id_mission_admins_missions",
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
        await queryRunner.dropTable("admins_missions")
    }

}
