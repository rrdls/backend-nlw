import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrphanages1602820875524 implements MigrationInterface {
    name = 'createOrphanages1602820875524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orphanage" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "about" varchar NOT NULL, "instructions" varchar NOT NULL, "opening_hours" varchar NOT NULL, "open_on_weekends" boolean NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "orphanage"`);
    }

}
