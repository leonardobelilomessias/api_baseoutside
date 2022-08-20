import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableSponsorsMissions1659563319041 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "sponsors_missions",
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
                            length:"36"
                        },
                        {
                            name: "id_sponsor",
                            type: "varchar",
                            length:"36"
                        },
                        {
                            name: "type",
                            type: "int",
                            default:0
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        },
                        {
                            name: "mission_private",
                            type: "boolean",
                            default:false
                        },
                        {
                            name: "sponsor_private",
                            type: "boolean",
                            default:false
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_id_sponsors_missions",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_sponsor"]
                        },
                        {
                            name: "fk_id_mission_sponsors",
                            referencedTableName: "missions",
                            referencedColumnNames: ["id"],
                            columnNames:["id_mission"]
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sponsors_missions")
    }

}
