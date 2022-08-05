import { type } from "os"
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAgent1655849858546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "agents",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            isPrimary: true,
                            length:"36"
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
                            name: "name",
                            type:"varchar(50)"
                        },
                        {
                            name: "description",
                            type: "text",
                            isNullable:true
                        },
                        {
                            name: "balance",
                            type: "decimal(15,2)",
                            default:0.00
                        },
                        {
                            name: "is_active",
                            type: "boolean",
                            default:true
                        },
                        {
                            name: "level",
                            type: "int",
                            default:0
                        },
                        {
                            name: "image_profile",
                            type: "varchar",
                            isNullable:true
                        },
                        {
                            name: "vocation",
                            type: "varchar",
                            isNullable:true
                        },

                        {
                            name: 'created_at',
                            type: "timestamp",
                            default:"now()"
                        },
                        {
                            name: "state",
                            type: "int",
                            default:0
                        }


                    ],
                    
                }
           )
       )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agents")
    }

}
