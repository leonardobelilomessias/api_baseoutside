import { type } from "os"
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableCardAgent1662491938066 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"card_agent",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        length:"36",
                        isPrimary:true
                    },
                    {
                        name:"id_agent",
                        type:"varchar",
                        length:"36",
                    },
                    {
                        name:"title",
                        type:"varchar",
                        length:"50"
                    },
                    {
                        name:"description",
                        type:"text"
                    }
                ],
                foreignKeys:[
                    {
                        name: "fk_id_agent_card",
                        referencedTableName: "agents",
                        referencedColumnNames: ["id"],
                        columnNames:["id_agent"],
                        onDelete: "CASCADE",
                        onUpdate:"CASCADE"
                    },
                ]
            })
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("card_agent")
    }

}
