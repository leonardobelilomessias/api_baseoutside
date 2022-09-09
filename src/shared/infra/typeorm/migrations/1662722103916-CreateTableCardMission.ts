import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableCardMission1662722103916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"card_mission",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        length:"36",
                        isPrimary:true
                    },
                    {
                        name:"id_mission",
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
                        name: "fk_id_mission_card",
                        referencedTableName: "missions",
                        referencedColumnNames: ["id"],
                        columnNames:["id_mission"],
                        onDelete: "CASCADE",
                        onUpdate:"CASCADE"
                    },
                ]
            })
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("card_mission")
    }

}
