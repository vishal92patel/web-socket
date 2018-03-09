-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 09, 2018 at 04:48 AM
-- Server version: 5.5.59-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `websocket`
--

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE IF NOT EXISTS `chats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_user_id` int(11) NOT NULL,
  `to_user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `sent_on` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `gender` text NOT NULL,
  `has_already_logged_in` tinyint(1) NOT NULL DEFAULT '0',
  `socket_id` text NOT NULL,
  `last_seen` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=113 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `gender`, `has_already_logged_in`, `socket_id`, `last_seen`) VALUES
(101, 'Vishal gmail', 'v@g.com', '12345678', 'male', 0, 'tNjBQPwweX3DlhqHAAAW', '08-03-2018 17:55:20'),
(100, 'Vishal yahoo', 'v@y.com', '12345678', 'male', 0, 'g7JkCSeKR0w-CqlHAAAD', '09-03-2018 12:11:07'),
(112, 'Ayush', 'ayush@y.com', '12345678', 'female', 0, 'wdLt-nv85alB2PBKAAAD', '09-03-2018 11:11:04');

-- --------------------------------------------------------

--
-- Table structure for table `users_profile_picture`
--

CREATE TABLE IF NOT EXISTS `users_profile_picture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `path` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Dumping data for table `users_profile_picture`
--

INSERT INTO `users_profile_picture` (`id`, `user_id`, `path`) VALUES
(22, 100, '5a8c08ae49124.jpg'),
(23, 101, '5a8e6f327cf4d.jpg'),
(34, 112, '5aa1fb0d37ef2.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
