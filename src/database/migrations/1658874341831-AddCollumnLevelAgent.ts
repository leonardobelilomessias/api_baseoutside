import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddCollumnLevelAgent1658874341831 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "agent",
        new TableColumn(
            {
                name: "level",
                type: "int",
                default:0
            }
        )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("agent","level")
    }

}
