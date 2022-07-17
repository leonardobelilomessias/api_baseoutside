import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm"

export class addcolumns1658006306707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table(
                {
                    name: "skills_agent",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            isPrimary:true
                        },
                        {
                            name: "skill",
                            type: "varchar",
                        },
                        {
                            name: "id_agent",
                            type:"varchar"
                        }
                    ]
              }
            )
        )

        await queryRunner.createTable(
            new Table(
                {
                    name: "interests_agent",
                    columns: [
                        {
                            name: "id",
                            type: "varchar",
                            isPrimary:true
                        },
                        {
                            name: "interests",
                            type:"varchar"
                        },
                        {
                            name: "id_agent",
                            type: "varchar"
                        }
                    ]
                }
            )
        )
        await queryRunner.addColumn("agent", 
            new TableColumn(
                {
                    name: "vocation",
                    type:"varchar"
                }
            )
        )

        await queryRunner.createForeignKey("skills_agent", 
            new TableForeignKey({
                name: "fk_agent_skill",
                columnNames: ["id_agent"],
                referencedColumnNames: ["id"],
                referencedTableName: "agent",
                onDelete: "CASCADE",
                onUpdate:"CASCADE"
            }),
            
        )
        await queryRunner.createForeignKey("interests_agent",
            new TableForeignKey({
                name: "fk_agent_interest",
                columnNames: ["id_agent"],
                referencedColumnNames: ["id"],
                referencedTableName: "agent",
                onDelete: "CASCADE",
                onUpdate:"CASCADE"
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.dropForeignKey("skills_agent", "fk_agent")
        await queryRunner.dropForeignKey("interests_agent", "fk_agent")
        await queryRunner.dropColumn("agent", "vocation")
        await queryRunner.dropTable("interests_agent")
        await queryRunner.dropTable("skills_agent")
    }

}
