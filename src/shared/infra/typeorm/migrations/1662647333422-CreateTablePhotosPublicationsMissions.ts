import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTablePhotosPublicationsMissions1662647333422 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "photos_publications_missions",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            length: "36",
                            isPrimary:true
                        },
                        {
                            name: "id_publication",
                            type: "varchar",
                            length:"36"
                        },
                        {
                            name:"url",
                            type:"varchar"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_publications_mission",
                            referencedTableName: "publications_missions",
                            referencedColumnNames: ["id"],
                            columnNames: ["id_publication"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("photos_publications_missions")
    }

}
