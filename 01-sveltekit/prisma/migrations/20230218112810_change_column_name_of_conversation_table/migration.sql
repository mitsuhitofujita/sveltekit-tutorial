/*
  Warnings:

  - You are about to drop the column `content` on the `Conversation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Conversation` DROP COLUMN `content`,
    ADD COLUMN `subject` VARCHAR(191) NOT NULL DEFAULT '';
