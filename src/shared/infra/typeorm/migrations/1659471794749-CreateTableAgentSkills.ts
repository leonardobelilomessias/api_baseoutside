import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTableAgentSkills1659471794749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table(
                {
                    name: "skills_agents",
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

        await queryRunner.createForeignKey("skills_agents", 
        new TableForeignKey({
            name: "fk_agent_skill",
            columnNames: ["id_agent"],
            referencedColumnNames: ["id"],
            referencedTableName: "agents",
            onDelete: "CASCADE",
            onUpdate:"CASCADE",
            
        }),
        
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("skills_agents", "fk_agent_skill")
        await queryRunner.dropTable("skills_agents")
    }

}
