import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1687470922417 implements MigrationInterface {
    name = 'NewMigration1687470922417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
    }

}
