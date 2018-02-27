-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2018 at 08:14 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `websocket`
--

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` int(11) NOT NULL,
  `from_user_id` int(11) NOT NULL,
  `to_user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `sent_on` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `gender` text NOT NULL,
  `has_already_logged_in` tinyint(1) NOT NULL DEFAULT '0',
  `socket_id` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `gender`, `has_already_logged_in`, `socket_id`) VALUES
(110, 'vishal', 'v@y.comq', '12345678', 'male', 0, ''),
(109, 'vishal', 'v@y.com1234', '12345678', 'male', 0, ''),
(108, 'vishal', 'v@y.com123', '12345678', 'male', 0, ''),
(107, 'vishalt', 'v@y.comt', '12345678tt', 'male', 0, ''),
(106, 'vishal', 'abhi@y.com', '12345678', 'female', 0, '0'),
(105, 'vishal', 'v@y.comcdc', '12345678', 'female', 0, '0'),
(104, 'vishal', 'v@y.comgbfb', '12345678', 'male', 0, '0'),
(103, 'vishal', 'v@y.comvf', '12345678', 'male', 0, '0'),
(102, 'vishal', 'v@y.com1', '12345678', 'male', 0, '0'),
(101, 'vishal', 'v@yy.com', '12345678', 'male', 0, '0'),
(100, 'vishal', 'v@y.com', '12345678', 'male', 0, '0');

-- --------------------------------------------------------

--
-- Table structure for table `users_profile_picture`
--

CREATE TABLE `users_profile_picture` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `path` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_profile_picture`
--

INSERT INTO `users_profile_picture` (`id`, `user_id`, `path`) VALUES
(22, 100, '5a8c08ae49124.jpg'),
(23, 101, '5a8e6f327cf4d.jpg'),
(24, 102, '5a8e6f907e84d.jpg'),
(25, 103, '5a8e6fdf6ebe7.jpg'),
(26, 104, '5a8e707a2ccf5.jpg'),
(27, 105, '5a8e7fc492ca8.jpg'),
(28, 106, '5a8ea2d47d131.jpg'),
(29, 107, '5a94f1605afff.jpg'),
(30, 108, '5a9502a94ae38.jpg'),
(31, 109, '5a95034f19623.jpg'),
(32, 110, '5a9503ae5e223.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_profile_picture`
--
ALTER TABLE `users_profile_picture`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `users_profile_picture`
--
ALTER TABLE `users_profile_picture`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
