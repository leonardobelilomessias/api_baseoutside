import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class addColumnUrlTablePhotoAgent1658440212803 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "photos_publication_agent",
            new TableColumn({
                name:"url",
                type:"varchar"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("photos_publication_agent","url")
    }

}
