CREATE DATABASE IF NOT EXISTS tams
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE tams;

DROP TABLE IF EXISTS `attendance`;
DROP TABLE IF EXISTS `events`;
DROP TABLE IF EXISTS `students`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users`(
    `id` VARCHAR(50) NOT NULL PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('admin', 'staff') NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `students`(
    `id` VARCHAR(10) NOT NULL PRIMARY KEY,
    `last_name` VARCHAR(50) NOT NULL,
    `first_name` VARCHAR(100) NOT NULL,
    `middle_name` VARCHAR(50) NULL,
    `gender` ENUM('male', 'female') NOT NULL,
    `course` ENUM('BSCS', 'ACT') NOT NULL,
    `year_level` ENUM('1', '2', '3', '4') NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `events`(
    `id` VARCHAR(50) NOT NULL PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `date` DATETIME NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `attendance`(
    `id` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `event_id` VARCHAR(50) NOT NULL,
    `student_id` VARCHAR(10) NOT NULL,
    FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- INSERT INITIAL DATA
INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES ('USR202601', 'tamsadmin', '82f23411017f8d4c3a0365655f2dcfbc235ea32397fd57bdd204c413db1c030c', 'admin');
INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES ('USR202602', 'tamsstaff', '8f331367234b4d1abbaccd1acef798bb7c600aa5920b97fd6460d8b5163c50fb', 'staff');