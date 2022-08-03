import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class mission1656014397876 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "missions",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "36",
                        isPrimary:true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "creator",
                        type:"varchar(36)"
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
                        name: "state",
                        type: "int",
                        default:0
                    },

                    {
                        name: "balance",
                        type: "decimal(15,2)",
                        default:0.00
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        default:true
                    },
                    {
                        name: "level",
                        type: "int",
                        default:0
                    },
                    {
                        name: "image_profile",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "duration",
                        type: "int",
                        default:0
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
                        name: "is_private",
                        type: "boolean",
                        default:false
                    },
                    {
                        name: "type",
                        type: "int",
                        isNullable:true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default:"now()"
                    },
                    {
                        name: "field",
                        type: "varchar",
                        isNullable:true
                    }

                ],
                foreignKeys: [
                    {
                        name: "fk_agent_creator",
                        referencedTableName: "agents",
                        referencedColumnNames: ["id"],
                        columnNames: ["creator"],
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("missions")
    }


}
