import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTablePublicationsMissions1662647050127 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"publications_missions",
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
                    name: "created_at",
                    type: "timestamp",
                    default:"now()"
                },
                {
                    name: "type",
                    type:"varchar",
                },
                {
                    name: "description",
                    type: "text",
                    isNullable:true
                },

            ],
            foreignKeys: [
                {
                    name: "fk_id_mission_publications",
                    referencedTableName: "missions",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_mission"],
                    onDelete: "CASCADE",
                    onUpdate:"CASCADE"
                    
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("publications_missions")
    }

}
