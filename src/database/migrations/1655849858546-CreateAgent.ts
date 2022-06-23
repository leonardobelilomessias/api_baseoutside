import { type } from "os"
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
                            type: "varchar",
                            isPrimary: true,
                            length:"36"
                        },
                        {
                            name: "name",
                            type:"varchar(50)"
                        },
                        {
                            name: "email",
                            type:"varchar"
                        },
                        {
                            name: "password",
                            type:"varchar"
                        },
                        {
                            name: "description",
                            type: "text(4000)",
                            isNullable:true
                        },
                        {
                            name: "image_profile",
                            type: "varchar",
                            isNullable:true
                        },
                        {
                            name: "balance",
                            type: "decimal(15,2)",
                            default:0.00
                        },
                        {
                            name: 'create_at',
                            type: "timestamp",
                            default:"now()"
                        },
                        {
                            name: "is_active",
                            type: "boolean",
                            default:true
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
