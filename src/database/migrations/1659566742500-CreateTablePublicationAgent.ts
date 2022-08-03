import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTablePublicationAgent1659566742500 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
            {
                name: "publications_agents",
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
                        name: "fk_id_agent_publications",
                        referencedTableName: "agents",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_agent"],
                        onDelete: "CASCADE",
                        onUpdate:"CASCADE"
                        
                    }
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("publications_agents")
    }

}
