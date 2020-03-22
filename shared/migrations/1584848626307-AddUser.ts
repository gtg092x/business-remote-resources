import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUser1584848626307 implements MigrationInterface {
    name = 'AddUser1584848626307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying, "username" character varying NOT NULL, "email" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT false, "avatar" character varying, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
