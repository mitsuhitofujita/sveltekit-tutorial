/*
  Warnings:

  - You are about to drop the column `content` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `conversationId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payload` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_postId_fkey`;

-- AlterTable
ALTER TABLE `Comment` DROP COLUMN `content`,
    DROP COLUMN `postId`,
    ADD COLUMN `conversationId` BIGINT NOT NULL,
    ADD COLUMN `payload` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `Conversation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
