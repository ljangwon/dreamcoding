-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 21-03-21 08:03
-- 서버 버전: 10.1.38-MariaDB
-- PHP 버전: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `codei`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `board`
--

CREATE TABLE `board` (
  `code` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `contents` mediumtext,
  `name` varchar(50) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `board`
--

INSERT INTO `board` (`code`, `title`, `contents`, `name`, `create_date`) VALUES
(8, 'dfaddas', 'fdasdasfa', '1111', '2021-03-15 12:18:44'),
(9, 'dfaddas', 'fdasdasfa', '2222', '2021-03-15 12:20:01'),
(10, 'fsadasdf', 'sadfsadfasdfdas', '3333', '2021-03-15 12:20:16'),
(14, 'ㄹㅇㄴㄹㄴㅇㄹ', 'ㄴㄹㄴㅇㄴㄹㄴㅇㄹㄴ', 'ㄹㅇㄴㄹㅇㄴㄹ', '2021-03-16 00:06:29'),
(15, '테스트 제목', '이것이 내용입니다. 신나는 하루', '이장원', '2021-03-16 00:06:57');

-- --------------------------------------------------------

--
-- 테이블 구조 `calendar_event`
--

CREATE TABLE `calendar_event` (
  `caID` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  `create_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `calendar_event`
--

INSERT INTO `calendar_event` (`caID`, `title`, `start`, `end`, `create_date`) VALUES
(1, 'fdsfds', '2020-01-01', '0000-00-00', NULL);

-- --------------------------------------------------------

--
-- 테이블 구조 `dt_excel`
--

CREATE TABLE `dt_excel` (
  `dt_id` bigint(20) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `position` varchar(140) DEFAULT NULL,
  `office` varchar(100) DEFAULT NULL,
  `extn` int(11) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `salary` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `dt_excel`
--

INSERT INTO `dt_excel` (`dt_id`, `name`, `position`, `office`, `extn`, `start_date`, `salary`) VALUES
(1, '111', 'postion111111', 'fsdfs', 123, '2020-01-01', '59000'),
(2, '2222', 'fdsdfsdfsd', 'dfsdfds', 12321, '2020-01-02', '2312321'),
(3, '33333', 'fdsfsdf', 'dsfsadfdsa', 122, '0000-00-00', '231231'),
(4, '4444', 'fdsfsdf', 'dsfsadfdsa', 122, '0000-00-00', '231231');

-- --------------------------------------------------------

--
-- 테이블 구조 `tb_member_log`
--

CREATE TABLE `tb_member_log` (
  `log_id` bigint(11) NOT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  `board_id` bigint(20) DEFAULT NULL,
  `read_yn` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 테이블 구조 `tb_member_master`
--

CREATE TABLE `tb_member_master` (
  `uid` bigint(11) NOT NULL,
  `user_id` varchar(60) DEFAULT NULL,
  `passwd` varchar(50) DEFAULT NULL,
  `user_name` varchar(70) DEFAULT NULL,
  `point` int(11) NOT NULL,
  `register_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `board`
--
ALTER TABLE `board`
  ADD PRIMARY KEY (`code`);

--
-- 테이블의 인덱스 `calendar_event`
--
ALTER TABLE `calendar_event`
  ADD PRIMARY KEY (`caID`);

--
-- 테이블의 인덱스 `dt_excel`
--
ALTER TABLE `dt_excel`
  ADD PRIMARY KEY (`dt_id`);

--
-- 테이블의 인덱스 `tb_member_log`
--
ALTER TABLE `tb_member_log`
  ADD PRIMARY KEY (`log_id`);

--
-- 테이블의 인덱스 `tb_member_master`
--
ALTER TABLE `tb_member_master`
  ADD PRIMARY KEY (`uid`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `board`
--
ALTER TABLE `board`
  MODIFY `code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 테이블의 AUTO_INCREMENT `calendar_event`
--
ALTER TABLE `calendar_event`
  MODIFY `caID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 테이블의 AUTO_INCREMENT `dt_excel`
--
ALTER TABLE `dt_excel`
  MODIFY `dt_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 테이블의 AUTO_INCREMENT `tb_member_log`
--
ALTER TABLE `tb_member_log`
  MODIFY `log_id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- 테이블의 AUTO_INCREMENT `tb_member_master`
--
ALTER TABLE `tb_member_master`
  MODIFY `uid` bigint(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
