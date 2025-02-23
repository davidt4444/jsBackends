-- CreateTable
CREATE TABLE `JPost` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uniqueId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(200) NOT NULL,
    `content` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `author` VARCHAR(200) NULL,
    `category` VARCHAR(100) NULL,
    `updatedAt` DATETIME(3) NULL,
    `likesCount` INTEGER NOT NULL DEFAULT 0,
    `authorId` INTEGER NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT false,
    `views` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
