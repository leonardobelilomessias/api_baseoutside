import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTablePhotosPublicationsAgents1659566896434 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "photos_publications_agents",
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
                            name: "fk_publications_agents",
                            referencedTableName: "publications_agents",
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
        await queryRunner.dropTable("photos_publications_agents")
    }

}
