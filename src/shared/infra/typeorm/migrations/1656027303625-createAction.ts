import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createAction1656027303625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "actions",
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
                        name: "local",
                        type: "varchar",
                        isNullable:true
                    },
                    {
                        name: "id_mission",
                        type: "varchar(36)",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default:"now()"
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
                        name: "state",
                        type: "int",
                        default:0
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        default:true
                    },
                    {
                        name: "type",
                        type: "int",
                        default:0
                    },
                    {
                        name: "image_profile",
                        type: "varchar",
                        isNullable: true,
                    },

                ],
                foreignKeys: [
                    {
                        name: "fk_mission_action",
                        referencedTableName: "missions",
                        referencedColumnNames: ["id"],
                        columnNames:["id_mission"],
                        onDelete: "CASCADE",
                        onUpdate:"CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("actions")
    }

}
