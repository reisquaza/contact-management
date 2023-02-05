import { MigrationInterface, QueryRunner } from "typeorm";

export class users1675607079258 implements MigrationInterface {
    name = 'users1675607079258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "deletedAt" TO "isActive"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "isActive" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "isActive" TO "deletedAt"`);
    }

}
