-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2019 at 11:59 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_tokens`
--

CREATE TABLE `admin_tokens` (
  `id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `token` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_tokens`
--

INSERT INTO `admin_tokens` (`id`, `admin_id`, `token`) VALUES
(4, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImlhdCI6MTU3NzQ3NzU2NX0.x21NOTGkXBdm4k0eW0ZKZZnOEmNLmzWf6e48OTUGqCE');

-- --------------------------------------------------------

--
-- Table structure for table `admin_user`
--

CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL,
  `user_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pass` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_user`
--

INSERT INTO `admin_user` (`id`, `user_name`, `pass`) VALUES
(0, 'admin2', '$2a$12$ZwtO0RU01uE1XOxNEuk2se/gP/tFZ2MY7mPZZvhYsuoEd9.aRCMcO'),
(2, 'amany', '$2a$12$5b97nNod9PDthOG1cFXXiev4ws5ISQSfDYLyC4MigMsy2MXpkaF1G'),
(3, 'asd', '$2a$12$5b97nNod9PDthOG1cFXXiev4ws5ISQSfDYLyC4MigMsy2MXpkaF1G'),
(10, 'admin', '$2a$12$5b97nNod9PDthOG1cFXXiev4ws5ISQSfDYLyC4MigMsy2MXpkaF1G');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `status` enum('pending','done','deployed') NOT NULL,
  `group` enum('A','B') NOT NULL,
  `created_at` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `status`, `group`, `created_at`) VALUES
(2, '2222222222222222', '', 'done', 'B', '2019-12-26'),
(3, 'task 3 task 3 task 3', 'tewyduve vedvhjebdhjdj w', 'done', 'A', '2019-12-29'),
(5, 'task 10', 'tewyduve vedvhjebdhjdj w', 'done', 'A', '2019-12-29'),
(6, 'task 1000', 'tewyduve vedvhjebdhjdj w', 'done', 'B', '2019-12-29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_tokens`
--
ALTER TABLE `admin_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_id` (`admin_id`);

--
-- Indexes for table `admin_user`
--
ALTER TABLE `admin_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_name` (`user_name`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_tokens`
--
ALTER TABLE `admin_tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin_tokens`
--
ALTER TABLE `admin_tokens`
  ADD CONSTRAINT `admin_id` FOREIGN KEY (`admin_id`) REFERENCES `admin_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
