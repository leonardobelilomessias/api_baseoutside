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
                            name: "id_agent_sponsor",
                            type: "varchar",
                            length: "36",
                        },
                        {
                            name: "id_mission_sponsored",
                            type: "varchar",
                            length: "36",
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        },
                        {
                            name: "agent_sponsor_private",
                            type: "boolean",
                            default:false
                        },
                        {
                            name: "mission_sponsored_private",
                            type: "boolean",
                            default:false
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_id_agent_sponsors_missions",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_agent_sponsor"]
                        },
                        {
                            name: "fk_id_mission_sponsors_missions",
                            referencedTableName: "missions",
                            referencedColumnNames: ["id"],
                            columnNames:["id_mission_sponsored"]
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
