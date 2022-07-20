import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePublicationUser1658266225611 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: "publications_agent",
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
                        name: "fk_agent_publications",
                        referencedTableName: "agent",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_agent"],
                        onDelete: "CASCADE",
                        onUpdate:"CASCADE"
                        
                    }
                ]
            }
        ))
        await queryRunner.createTable(
            new Table(
                {
                    name: "photos_publication_agent",
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
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_publication_agent",
                            referencedTableName: "publications_agent",
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
        await queryRunner.dropTable("photos_publication_agent")
        await queryRunner.dropTable("publications_agent")

    }

}
