import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAgent1655849858546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "agent",
                    columns: [
                        {
                            name: "id",
                            type: "binary(16)",
                            isPrimary:true
                        },
                        {
                            name: "name",
                            type:"varchar(50)"
                        },
                        {
                            name: "password",
                            type:"varchar"
                        },
                        {
                            name: "description",
                            type:"text(4000)"
                        },
                        {
                            name: "image_profile",
                            type:"varchar"
                        },
                        {
                            name: "balance",
                            type:"int"
                        },
                        {
                            name: 'create_at',
                            type: "timestamp",
                            default:"now()"
                        }

                    ] ,
                }
           )
       )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agent")
    }

}
