-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th3 31, 2023 lúc 03:36 PM
-- Phiên bản máy phục vụ: 8.0.32
-- Phiên bản PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `linhkienpc`
--
CREATE DATABASE IF NOT EXISTS `linhkienpc` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `linhkienpc`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
('case', 'Case'),
('cpu', 'CPU'),
('mainboard', 'Mainboard'),
('monitor', 'Monitor'),
('psu', 'PSU'),
('ram', 'Ram'),
('vga', 'VGA');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `price` double DEFAULT '100000',
  `img` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `cate_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `sup_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_ibfk_2` (`sup_id`),
  KEY `products_ibfk_3` (`cate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `price`, `img`, `quantity`, `cate_id`, `sup_id`) VALUES
('vga-rtx-4090-aorus', 'VGA Gigabyte RTX 4090 Aorus Master 24G GDDR6X (GV-N4090AORUS M-24GD)', 'Card đồ họa AORUS GeForce RTX® 40 Series được xây dựng để giải phóng từng chút kiến trúc NVIDIA Ada Lovelace, với WINDFORCE cải tiến trình bày quạt sinh học mới và giải pháp làm mát tiên tiến cho cả GPU và VRAM. Thêm vào đó, Thẻ đồ họa AORUS thể hiện phong cách của bạn theo cả cách chiếu sáng RGB hoặc bảng điều khiển LCD. Độ bền được củng cố giờ đây hứa hẹn tuổi thọ dài hơn và trải nghiệm tốt hơn. Đỉnh của giải nhiệt. Đỉnh cao trong chơi game.', 54900000, 'https://product.hstatic.net/200000420363/product/1_16ecda3849174ec18f86c43363a74655_master.jpg', 1, 'vga', 'asus'),
('vga-tuf-1650-4gb', 'VGA ASUS TUF Gaming GeForce GTX 1650 OC 4GB GDDR6 (TUF-GTX1650-O4GD6-P-GAMING)', 'TUF Gaming GeForce® GTX 1650 có một kho vũ khí mang lại mã lực 3D đáng tin cậy cho hệ sinh thái TUF Gaming. Mỗi VGA được chế tạo bằng cách sử dụng công nghệ Auto-Extreme, được bảo vệ bởi một tấm nền cứng ngăn PCB uốn cong và có quạt với chất bôi trơn cấp không gian được niêm phong theo tiêu chuẩn IP5X. Và tất cả đều được hỗ trợ bởi pin kiểm tra xác nhận nghiêm ngặt để đảm bảo khả năng tương thích với các thành phần TUF mới nhất. Nếu bạn đang tìm kiếm thùng chứa card đồ họa, hãy khóa và tải thiết bị của bạn bằng TUF.', 3750000, '//product.hstatic.net/200000420363/product/aming-geforce-gtx-1650-oc-4gb-gddr6-_tuf-gtx1650-o4gd6-p-gaming_-1__1__0ece18ff3c2a4299aa1d7c07e5f8a053_master.jpg', 0, 'vga', 'asus');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `role_name` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `role_name`) VALUES
('admin', 'Admin'),
('user', 'User');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
CREATE TABLE IF NOT EXISTS `suppliers` (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `suppliers`
--

INSERT INTO `suppliers` (`id`, `title`) VALUES
('asus', 'Asus'),
('ggb', 'Gigabyte');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `sdt` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role` (`role`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `sdt`, `role`) VALUES
(1, 'admin', 'admin@gmail.com', '123', NULL, NULL);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`sup_id`) REFERENCES `suppliers` (`id`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`cate_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
