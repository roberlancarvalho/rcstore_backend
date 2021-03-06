import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1645246835988 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "stock",
            type: "int",
          },
          {
            name: "status",
            type: "boolean",
          },
          {
            name: "price",
            type: "decimal",
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("products");
  }
}
