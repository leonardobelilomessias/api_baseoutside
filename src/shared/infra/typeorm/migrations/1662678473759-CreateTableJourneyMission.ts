import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableJourneyMission1662678473759 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table(
                {
                    name: "journeys_mission",
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
                            name: "type",
                            type: "varchar",
                            isNullable:true
                        },

                        {
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        },

                        {
                            name: "id_content",
                            type: "varchar",
                            length:"36"
                        },
                        {
                            name: "is_hidden",
                            type: "boolean",
                            default:false
                        },
                        {
                            name: "is_private",
                            type:"boolean",
                            default:false,
                            isNullable:true
                        },
                    ],
                    foreignKeys: [
                        {
                            name: "fk_mission_journeys",
                            referencedTableName: "missions",
                            referencedColumnNames: ["id"],
                            columnNames: ["id_mission"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("journeys_mission")
    }

}
