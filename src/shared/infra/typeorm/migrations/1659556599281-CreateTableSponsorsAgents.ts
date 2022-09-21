import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableSponsorsAgents1659556599281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "sponsors_agents",
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
                            name: "id_sponsor",
                            type: "varchar",
                            length:"36"
                        },
                        {
                            name: "type",
                            type: "varchar",
                            length:"20"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default:"now()"
                        },
                        {
                            name: "agent_private",
                            type: "boolean",
                            default:false
                        },
                        {
                            name:"value",
                            type:"decimal",
                            precision:10,
                            scale:2
                            
                        },
                        {
                            name: "sponsor_private",
                            type: "boolean",
                            default:false
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "fk_id_agent_sponsor",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_agent"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        },
                        {
                            name: "fk_id_sponsor_agent",
                            referencedTableName: "agents",
                            referencedColumnNames: ["id"],
                            columnNames:["id_sponsor"],
                            onDelete: "CASCADE",
                            onUpdate:"CASCADE"
                        }
                    ]
                }
            )
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sponsors_agents")
    }

}
