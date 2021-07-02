-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Jun 2021 pada 04.07
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mamamia_planner`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_bahan`
--

CREATE TABLE `tbl_bahan` (
  `id_bahan` int(11) NOT NULL,
  `id_resep` int(11) NOT NULL,
  `bahan` varchar(128) NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_bahan`
--

INSERT INTO `tbl_bahan` (`id_bahan`, `id_resep`, `bahan`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 1, '1 sisir pisang kepok matang.', 1, '2021-05-24 14:11:59', NULL),
(2, 1, '4 sendok makan tepung terigu', 1, '2021-05-24 14:12:15', NULL),
(3, 1, '3 sendok makan tepung tapioka.', 1, '2021-05-24 14:12:27', NULL),
(4, 1, 'Garam (secukupnya).', 1, '2021-05-24 14:12:51', NULL),
(5, 1, ' 1 sendok makan tepung beras.', 1, '2021-05-24 14:13:01', NULL),
(6, 1, 'Bubuk vanili (secukupnya).', 1, '2021-05-24 14:13:12', NULL),
(7, 1, 'Gula (secukupnya).', 1, '2021-05-24 14:13:24', NULL),
(8, 1, 'Air (secukupnya).', 1, '2021-05-24 14:13:35', NULL),
(9, 2, '1 sisir pisang kepok', 1, '2021-05-24 14:13:56', NULL),
(10, 2, '5 sendok makan tepung terigu', 1, '2021-05-24 14:14:07', NULL),
(11, 2, '1 sendok makan tepung tapioka', 1, '2021-05-24 14:14:19', NULL),
(12, 2, 'Garam (secukupnya)', 1, '2021-05-24 14:14:30', NULL),
(13, 2, 'Bubuk vanili (secukupnya)', 1, '2021-05-24 14:14:43', NULL),
(14, 2, 'Air (secukupnya)', 1, '2021-05-24 14:14:55', NULL),
(15, 2, 'Minyak goreng (secukupnya)', 1, '2021-05-24 14:15:06', NULL),
(16, 3, '1 sisir pisang kepok (potong sesuai selera)', 1, '2021-05-24 14:21:57', NULL),
(17, 3, '3 sendok makan margarin', 1, '2021-05-24 14:22:08', NULL),
(18, 3, '100 gram tepung terigu', 1, '2021-05-24 14:22:33', NULL),
(19, 3, 'Garam (secukupnya)', 1, '2021-05-24 14:22:33', NULL),
(20, 3, 'Gula (secukupnya)', 1, '2021-05-24 14:22:57', NULL),
(21, 3, 'Keju parut (secukupnya)', 1, '2021-05-24 14:22:57', NULL),
(22, 3, 'Coklat blok (diparut)', 1, '2021-05-24 14:23:21', NULL),
(23, 3, 'Susu kental manis coklat', 1, '2021-05-24 14:23:21', NULL),
(24, 3, 'Air (secukupnya)', 1, '2021-05-24 14:23:43', NULL),
(25, 3, 'Minyak goreng (secukupnya)', 1, '2021-05-24 14:23:43', NULL),
(26, 4, '1 sisir pisang kepok (setengah tua)', 1, '2021-05-24 14:24:13', NULL),
(27, 4, '150 gram tepung beras', 1, '2021-05-24 14:24:13', NULL),
(28, 4, '50 gram gula halus', 1, '2021-05-24 14:24:34', NULL),
(29, 4, '1 sendok teh garam', 1, '2021-05-24 14:24:34', NULL),
(30, 4, '1 sendok teh vanili', 1, '2021-05-24 14:24:59', NULL),
(31, 4, '2 sendok makan minyak goreng (untuk adonan)', 1, '2021-05-24 14:24:59', NULL),
(32, 4, '100 cc air', 1, '2021-05-24 14:25:27', NULL),
(33, 4, 'Minyak untuk menggoreng (secukupnya)', 1, '2021-05-24 14:25:27', NULL),
(34, 4, '1 sisir pisang kepok (setengah tua)', 1, '2021-05-24 14:27:38', NULL),
(35, 4, '150 gram tepung beras', 1, '2021-05-24 14:27:38', NULL),
(36, 4, '50 gram gula halus', 1, '2021-05-24 14:28:03', NULL),
(37, 4, '1 sendok teh garam', 1, '2021-05-24 14:28:03', NULL),
(38, 4, '1 sendok teh vanili', 1, '2021-05-24 14:28:34', NULL),
(39, 4, '2 sendok makan minyak goreng (untuk adonan)', 1, '2021-05-24 14:28:34', NULL),
(40, 4, '100 cc air', 1, '2021-05-24 14:29:00', NULL),
(41, 4, 'Minyak untuk menggoreng (secukupnya)', 1, '2021-05-24 14:29:00', NULL),
(42, 5, '3 buah pisang kepok', 1, '2021-05-24 14:29:31', NULL),
(43, 5, '3 sendok makan tepung terigu', 1, '2021-05-24 14:29:31', NULL),
(44, 5, '1 sendok makan gula pasir', 1, '2021-05-24 14:29:56', NULL),
(45, 5, '3 sendok makan tepung roti', 1, '2021-05-24 14:29:56', NULL),
(46, 5, '5 sendok makan air', 1, '2021-05-24 14:30:17', NULL),
(47, 5, 'Keju mozarella (secukupnya)', 1, '2021-05-24 14:30:17', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_komentar`
--

CREATE TABLE `tbl_komentar` (
  `id_komentar` int(11) NOT NULL,
  `id_resep` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `komentar` text DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `gambar` varchar(128) DEFAULT NULL,
  `tanggal-komentar` date NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `is_active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_komentar`
--

INSERT INTO `tbl_komentar` (`id_komentar`, `id_resep`, `id_user`, `komentar`, `rating`, `gambar`, `tanggal-komentar`, `created_at`, `updated_at`, `deleted_at`, `is_active`) VALUES
(1, 1, 6, 'Garing banget, resep nya mantulll', 5, NULL, '2021-05-27', '2021-05-24 12:55:39', NULL, NULL, 1),
(2, 1, 5, 'biasa aja ', 1, NULL, '2021-05-31', '2021-05-24 12:57:06', NULL, NULL, 1),
(3, 3, 5, 'b aja', 1, NULL, '2021-05-31', NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_komentar_post_user`
--

CREATE TABLE `tbl_komentar_post_user` (
  `id_komentar_post_user` int(11) NOT NULL,
  `id_post_user` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `komentar` text DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `gambar` varchar(128) DEFAULT NULL,
  `tanggal_komentar` date NOT NULL,
  `is_active` int(11) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_komentar_post_user`
--

INSERT INTO `tbl_komentar_post_user` (`id_komentar_post_user`, `id_post_user`, `id_user`, `komentar`, `rating`, `gambar`, `tanggal_komentar`, `is_active`, `updated_at`, `deleted_at`, `created_at`) VALUES
(1, 3, 5, 'Widihhhhhh enak nih kayaknya', 5, '7.jpg', '2021-05-31', 1, NULL, NULL, NULL),
(2, 2, 4, 'Mau dongggg.....', 1, NULL, '2021-05-31', 1, NULL, NULL, '2021-05-24 11:52:42'),
(3, 3, 6, 'Gile Gile Gileeeee', 5, NULL, '2021-06-03', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_langkah_masak`
--

CREATE TABLE `tbl_langkah_masak` (
  `id_langkah_masak` int(11) NOT NULL,
  `id_resep` int(11) NOT NULL,
  `langkah_masak` text NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_langkah_masak`
--

INSERT INTO `tbl_langkah_masak` (`id_langkah_masak`, `id_resep`, `langkah_masak`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Pertama, kupas pisang terlebih dahulu dan belah menjadi dua bagian.', 1, '2021-05-24 14:33:14', NULL, NULL),
(2, 1, 'Siapkan wadah, kemudian masukkan tepung terigu, tepung tapioka, tepung beras, dan bubuk vanili secukupnya.', 1, '2021-05-24 14:34:32', NULL, NULL),
(3, 1, 'Tambahkan air sedikit demi sedikit hingga membentuk adonan yang cukup encer.', 1, '2021-05-24 14:34:32', NULL, NULL),
(4, 1, 'Tambahkan garam dan gula secukupnya. Cicipi rasanya, jangan sampai terlalu asin ataupun manis.', 1, '2021-05-24 14:35:01', NULL, NULL),
(5, 1, 'Celupkan buah pisang yang telah dikupas ke dalam adonan tepung, goreng dengan api sedang.', 1, '2021-05-24 14:35:01', NULL, NULL),
(6, 1, 'Gorenglah pisang hingga berwarna kuning keemasan, bagian luarnya renyah dan dalamnya matang sempurna.', 1, '2021-05-24 14:35:26', NULL, NULL),
(7, 1, 'Terakhir, angkat pisang yang telah matang dan sajikan selagi masih hangat.', 1, '2021-05-24 14:35:26', NULL, NULL),
(8, 2, 'Kupas kulit pisang kepok, belah menjadi dua bagian dan sisihkan. Kemudian, campurkan tepung tapioka, garam, bubuk vanili dan air secukupnya.', 1, '2021-05-24 14:36:01', NULL, NULL),
(9, 2, 'Aduk semua bahan hingga membentuk adonan yang encer, masukkan pisang ke dalam adonan tepung, aduk rata pisang, dan jangan lupa cicipi rasanya.', 1, '2021-05-24 14:36:01', NULL, NULL),
(10, 2, 'Siapkan wajan, dan masukkan minyak goreng secukupnya. Jika sudah, goreng pisang hingga berubah warna.', 1, '2021-05-24 14:36:24', NULL, NULL),
(11, 2, 'Angkat pisang goreng yang telah matang, tiriskan dan kemudian disajikan bersama dengan secangkir kopi.', 1, '2021-05-24 14:36:24', NULL, NULL),
(12, 3, 'Siapkan pisang kepok, kupas kulitnya, dan potong-potong sesuai selera.', 1, '2021-05-24 14:36:57', NULL, NULL),
(13, 3, 'Siapkan wadah bersih, masukkan tepung terigu, margarin, gula, gara, dan air menjadi satu. Buatlah adonan yang cukup encer.', 1, '2021-05-24 14:36:57', NULL, NULL),
(14, 3, 'Masukkan pisang yang telah dipotong-potong, aduk rata ke dalam adonan tepung.', 1, '2021-05-24 14:37:21', NULL, NULL),
(15, 3, 'Panaskan minyak goreng, goreng pisang dengan api sedang hingga berubah warna menjadi kuning keemasan.', 1, '2021-05-24 14:37:21', NULL, NULL),
(16, 3, 'Angkat pisang, tiriskan, dan sajikan di piring. Kemudian, taburkan keju dan coklat di yang sebelumnya sudah diparut di atasnya.', 1, '2021-05-24 14:37:53', NULL, NULL),
(17, 3, 'Untuk menambah kelegitan rasa, tambahkan susu kental manis coklat secukupnya. Pisang goreng coklat keju yang super praktis dan enaknya sadis siap disantap berama keluarga juga sahabat tercinta.', 1, '2021-05-24 14:37:53', NULL, NULL),
(18, 4, 'Kupas pisang kepok, dan iris memanjang (tidak sampai putus) menjadi 4 sampai 5 irisan, kemudian mekarkan seperi kipas.', 1, '2021-05-24 14:38:29', NULL, NULL),
(19, 4, 'Campurkan tepung, gula pasir, garam, dan vanili ke dalam satu wadah. Tuangkan air sedikit demi sedikit dan diaduk hingga tercampur rata (bisa ditamabahkan sedikit pewarna makanan warna kuning, jika suka). Dan tambahkan sedikit minyak goreng, kemudian aduk kembali', 1, '2021-05-24 14:38:29', NULL, NULL),
(20, 4, 'Celupkan pisang ke dalam adonan tepung, goreng hingga matang kekuningan. Angkat dan tiriskan, kemudian sajikan di piring saji.', 1, '2021-05-24 14:38:42', NULL, NULL),
(21, 5, 'Kupas pisang, lalu belah memanjang (jangan sampai putus) isi bagian tenganya dengan keju mozarella stick.', 1, '2021-05-24 14:39:09', NULL, NULL),
(22, 5, 'Buat adonan tepung dengan mencampur tepung terigu, gula, dan air sampi mengental.', 1, '2021-05-24 14:39:09', NULL, NULL),
(23, 5, 'Balut pisang dengan adonan yang telah dibuat, lalu lumuri dengan tepung roti.', 1, '2021-05-24 14:39:34', NULL, NULL),
(24, 5, 'Goreng pisang ke dalam minyak yang sudah dipanaskan dengan api kecil sampai warnanya berubah.', 1, '2021-05-24 14:39:34', NULL, NULL),
(25, 5, 'Kemudian, jika dirasa sudah matang, angkat dan tiriskan.', 1, '2021-05-24 14:39:50', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_menu`
--

CREATE TABLE `tbl_menu` (
  `id_menu` int(11) NOT NULL,
  `nama_menu` varchar(128) NOT NULL,
  `link_menu` varchar(128) NOT NULL,
  `icon_menu` varchar(128) NOT NULL,
  `tipe_menu` int(11) NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_menu`
--

INSERT INTO `tbl_menu` (`id_menu`, `nama_menu`, `link_menu`, `icon_menu`, `tipe_menu`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Dashboard', 'Dashboard/', 'fa fas-fa-tachometer-alt', 1, 1, NULL, NULL, NULL),
(2, 'Resep', 'Resep/listResep', 'fa fas-fa-compass', 1, 1, NULL, NULL, NULL),
(3, 'Bahan', 'Bahan/listBahan', 'fa fas-fa-box', 1, 1, NULL, NULL, NULL),
(4, 'Pengajuan', 'Pengajuan/Bahan', 'fa fas-fa-buffer', 1, 1, NULL, NULL, NULL),
(5, 'Pengajuan', 'Pengajuan/Resep', 'fa fas-fa-bullseye', 1, 1, NULL, NULL, NULL),
(6, 'User', 'user', 'fa fas-fa-users', 1, 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_penjadwalan`
--

CREATE TABLE `tbl_penjadwalan` (
  `id_penjadwal` int(11) NOT NULL,
  `id_resep` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `catatan` text NOT NULL,
  `for_date` date NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_penjadwalan`
--

INSERT INTO `tbl_penjadwalan` (`id_penjadwal`, `id_resep`, `id_user`, `catatan`, `for_date`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 3, 'Pengen makan pisang goreng ih', '2021-05-25', 1, '2021-05-24 08:00:52', NULL, NULL),
(2, 2, 3, 'Masih pengen makan pisang goreng tp beda rasa hehe', '2021-05-26', 1, '2021-05-24 08:00:52', NULL, NULL),
(3, 5, 4, 'BM Pisang Keju Mozarella woy', '2021-05-25', 1, '2021-05-24 08:00:52', NULL, NULL),
(4, 2, 5, 'Biasa wae lahhh', '2021-05-25', 1, '2021-05-24 08:00:52', NULL, NULL),
(5, 1, 6, 'Buat Jualan ', '2021-05-29', 1, '2021-05-24 08:01:44', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_post_user`
--

CREATE TABLE `tbl_post_user` (
  `id_post_user` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `gambar` varchar(128) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `tangal_upload` date NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_post_user`
--

INSERT INTO `tbl_post_user` (`id_post_user`, `id_user`, `gambar`, `deskripsi`, `tangal_upload`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 3, 'post1.jpeg', 'Masakanku hari ini, silahkan yang mau cobaaaa bahan - bahannya ada dibawah yaaaaaa', '2021-05-24', 1, NULL, NULL, NULL),
(2, 3, 'post2.jpeg', 'Buat makan malem sama doi cocok nihhhhh', '2021-05-24', 1, '2021-05-24 08:06:52', NULL, NULL),
(3, 4, '4.jpg', 'Hari ini aku masak ini lohhh, yang mau nanya-nanya boleh chat aku dibawah yaaa !!!', '2021-05-26', 1, '2021-05-24 11:36:05', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_request_resep`
--

CREATE TABLE `tbl_request_resep` (
  `id_request_resep` int(11) NOT NULL,
  `nama_request_resep` int(11) NOT NULL,
  `langkah_memasak` int(11) NOT NULL,
  `id_bahan` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `tanggal_request` int(11) NOT NULL,
  `created_at` int(11) NOT NULL,
  `update_at` int(11) NOT NULL,
  `delete_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_resep`
--

CREATE TABLE `tbl_resep` (
  `id_resep` int(11) NOT NULL,
  `nama_resep` varchar(128) NOT NULL,
  `deskripsi_resep` text NOT NULL,
  `gambar_resep` varchar(128) NOT NULL,
  `link_youtube` varchar(50) NOT NULL,
  `bahan` text NOT NULL,
  `langkah_memasak` text NOT NULL,
  `kalori` int(11) NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_resep`
--

INSERT INTO `tbl_resep` (`id_resep`, `nama_resep`, `deskripsi_resep`, `gambar_resep`, `link_youtube`, `bahan`, `langkah_memasak`, `kalori`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Pisang Goreng Crispy', 'Pisang goreng yang satu ini memiliki rasa yang gurih, manis, serta renyah, dan di bagian dalamnya lembut, empuk dan lumer di mulut dengan rasa legit yang menggigit lidah.', '1.jpg', 'https://www.youtube.com/watch?v=WbMESRQd7a0', '\"1 sisir pisang kepok matang\",\"4 sendok makan tepung terigu\",\"3 sendok makan tepung tapioka\",\"Garam (secukupnya)\",\"1 sendok makan tepung beras\",\"Bubuk vanili (secukupnya)\",\"Gula (secukupnya)\",\"Air (secukupnya)\"', '1. Pertama, kupas pisang terlebih dahulu dan belah menjadi dua bagian.\r\n2. Siapkan wadah, kemudian masukkan tepung terigu, tepung tapioka, tepung beras, dan bubuk vanili secukupnya.\r\n3. Tambahkan air sedikit demi sedikit hingga membentuk adonan yang cukup encer.\r\n4. Tambahkan garam dan gula secukupnya. Cicipi rasanya, jangan sampai terlalu asin ataupun manis.\r\n5.Celupkan buah pisang yang telah dikupas ke dalam adonan tepung, goreng dengan api sedang.\r\n6. Gorenglah pisang hingga berwarna kuning keemasan, bagian luarnya renyah dan dalamnya matang sempurna.\r\n7. Terakhir, angkat pisang yang telah matang dan sajikan selagi masih hangat.', 40, 1, '2021-05-24 06:14:00', NULL),
(2, 'Pisang Goreng Sederhana', 'Meskipun sederhana, pisang goreng tetap saja memiliki rasa yang mewah dan renyah. Buktinya banyak orang yang menikmati pisang goreng sederhana ini sebagai camilan dan teman ketika menyeruput kopi di pagi, maupun sore hari.', '1.jpg', 'https://www.youtube.com/watch?v=WbMESRQd7a0', '1. 1 sisir pisang kepok\r\n2. 5 sendok makan tepung terigu\r\n3. 1 sendok makan tepung tapioka\r\n4. Garam (secukupnya)\r\n5. Bubuk vanili (secukupnya)\r\n6. Air (secukupnya)\r\n7. Minyak goreng (secukupnya)', '1. Kupas kulit pisang kepok, belah menjadi dua bagian dan sisihkan. Kemudian, campurkan tepung tapioka, garam, bubuk vanili dan air secukupnya.\r\n2. Aduk semua bahan hingga membentuk adonan yang encer, masukkan pisang ke dalam adonan tepung, aduk rata pisang, dan jangan lupa cicipi rasanya.\r\n3. Siapkan wajan, dan masukkan minyak goreng secukupnya. Jika sudah, goreng pisang hingga berubah warna.\r\n4. Angkat pisang goreng yang telah matang, tiriskan dan kemudian disajikan bersama dengan secangkir kopi.', 90, 1, '2021-05-24 06:47:07', NULL),
(3, 'Pisang Goreng Coklat Keju', 'Siapa yang bisa menolak enaknya pisang goreng coklat keju yang satu ini? Rasa pisang yang legit, ditambah tepung bumbu pisang yang renyah dan ditaburkan coklat serta keju, membuat camilan yang satu ini semakin luar biasa.', '1.jpeg', 'https://www.youtube.com/watch?v=WbMESRQd7a0', '1. 1 sisir pisang kepok (potong sesuai selera)\r\n2. 3 sendok makan margarin\r\n3. 100 gram tepung terigu\r\n4. Garam (secukupnya)\r\n5. Gula (secukupnya)\r\n6. Keju parut (secukupnya)\r\n7. Coklat blok (diparut)\r\n8. Susu kental manis coklat\r\n9. Air (secukupnya)\r\n10. Minyak goreng (secukupnya)', '1. Siapkan pisang kepok, kupas kulitnya, dan potong-potong sesuai selera.\r\n2. Siapkan wadah bersih, masukkan tepung terigu, margarin, gula, gara, dan air menjadi satu. Buatlah adonan yang cukup encer.\r\n3. Masukkan pisang yang telah dipotong-potong, aduk rata ke dalam adonan tepung.\r\n4. Panaskan minyak goreng, goreng pisang dengan api sedang hingga berubah warna menjadi kuning keemasan.\r\n5. Angkat pisang, tiriskan, dan sajikan di piring. Kemudian, taburkan keju dan coklat di yang sebelumnya sudah diparut di atasnya.\r\n6. Untuk menambah kelegitan rasa, tambahkan susu kental manis coklat secukupnya. Pisang goreng coklat keju yang super praktis dan enaknya sadis siap disantap berama keluarga juga sahabat tercinta.', 80, 1, '2021-05-24 06:51:34', NULL),
(4, 'Pisang Goreng Kipas', 'Jika kamu bosan dengan olahan dan bentuk pisang goreng yang itu-itu saja, kamu bisa nih mencoba membuat pisang goreng kipas. Pisang goreng yang satu ini memiliki bentuk yang unik dan lebih lebar dari biasanya. Menyantap pisang goreng kipas sudah tentu menyenagkan karena porsinya yang sangat besar.', '1.jpg', 'https://www.youtube.com/watch?v=732E1jr-H_M', '1. 1 sisir pisang kepok (setengah tua)\r\n2. 150 gram tepung beras\r\n3. 50 gram gula halus\r\n4. 1 sendok teh garam\r\n5. 1 sendok teh vanili\r\n6. 2 sendok makan minyak goreng (untuk adonan)\r\n7. 100 cc air\r\n8. Minyak untuk menggoreng (secukupnya)', '1. Kupas pisang kepok, dan iris memanjang (tidak sampai putus) menjadi 4 sampai 5 irisan, kemudian mekarkan seperi kipas.\r\n2. Campurkan tepung, gula pasir, garam, dan vanili ke dalam satu wadah. Tuangkan air sedikit demi sedikit dan diaduk hingga tercampur rata (bisa ditamabahkan sedikit pewarna makanan warna kuning, jika suka). Dan tambahkan sedikit minyak goreng, kemudian aduk kembali.\r\n3. Celupkan pisang ke dalam adonan tepung, goreng hingga matang kekuningan. Angkat dan tiriskan, kemudian sajikan di piring saji.', 70, 1, '2021-05-24 07:03:23', NULL),
(5, 'Pisang Goreng Mozarella', 'Pisang goreng dengan lelehan keju di dalamnya tentu sangat nikmat sekali. Apalagi, jika dinikmati saat masih panas. Saat pisang digigit, lelehan keju pun langsung menyentuh lidah.', '1.jpg', 'https://www.youtube.com/watch?v=732E1jr-H_M', '1. 3 buah pisang kepok\r\n2. 3 sendok makan tepung terigu\r\n3. 1 sendok makan gula pasir\r\n4. 3 sendok makan tepung roti\r\n5. 5 sendok makan air\r\n6. Keju mozarella (secukupnya)', '1. Kupas pisang, lalu belah memanjang (jangan sampai putus) isi bagian tenganya dengan keju mozarella stick.\r\n2. Buat adonan tepung dengan mencampur tepung terigu, gula, dan air sampi mengental.\r\n3. Balut pisang dengan adonan yang telah dibuat, lalu lumuri dengan tepung roti.\r\n4. Goreng pisang ke dalam minyak yang sudah dipanaskan dengan api kecil sampai warnanya berubah.\r\n5. Kemudian, jika dirasa sudah matang, angkat dan tiriskan.', 50, 1, '2021-05-24 07:07:08', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_role`
--

CREATE TABLE `tbl_role` (
  `id_role` int(11) NOT NULL,
  `nama_role` varchar(20) NOT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_role`
--

INSERT INTO `tbl_role` (`id_role`, `nama_role`, `created_at`, `updated_at`, `is_active`, `deleted_at`) VALUES
(11, 'Admin', NULL, NULL, 1, NULL),
(12, 'User', NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `full_name` varchar(128) NOT NULL,
  `email_user` varchar(128) NOT NULL,
  `password_user` varchar(20) NOT NULL,
  `foto_user` varchar(50) NOT NULL,
  `role_id` int(11) NOT NULL,
  `is_active` int(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_user`
--

INSERT INTO `tbl_user` (`id_user`, `username`, `full_name`, `email_user`, `password_user`, `foto_user`, `role_id`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(2, 'admin', 'Admin Mamamia Planner', 'admin_mamamia@gmail.com', '12345', 'default.jpeg', 11, 1, '2021-05-24 05:31:33', NULL, NULL),
(3, 'Aliwafa', 'Muhamad Aliwafa', 'aliwafamuhamad16@gmail.com', 'aliwafa16', 'ali.jpeg', 12, 1, '2021-05-24 05:34:29', NULL, NULL),
(4, 'Ikaayu', 'Ika Ayu Pratiwi', 'ikaayu06@gmail.com', 'ikaayu06', 'ika.jpeg', 12, 1, '2021-05-24 05:35:01', NULL, NULL),
(5, 'Malik', 'Muhamad Malik Hidayatullah', 'malikhd@gmail.com', 'malikhd', 'malik.hpeg', 12, 1, '2021-05-24 05:35:43', NULL, NULL),
(6, 'Efriza', 'Muhammad Efriza Pandia', 'efrizapandia@gmail.com', 'efriza12345', 'efriza.hpeg', 12, 1, '2021-05-24 05:36:29', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_user_access_menu`
--

CREATE TABLE `tbl_user_access_menu` (
  `id_user_access_menu` int(11) NOT NULL,
  `id_role` int(11) NOT NULL,
  `id_menu` int(11) NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_bahan`
--
ALTER TABLE `tbl_bahan`
  ADD PRIMARY KEY (`id_bahan`);

--
-- Indeks untuk tabel `tbl_komentar`
--
ALTER TABLE `tbl_komentar`
  ADD PRIMARY KEY (`id_komentar`),
  ADD KEY `id_resep` (`id_resep`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `tbl_komentar_post_user`
--
ALTER TABLE `tbl_komentar_post_user`
  ADD PRIMARY KEY (`id_komentar_post_user`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `tbl_langkah_masak`
--
ALTER TABLE `tbl_langkah_masak`
  ADD PRIMARY KEY (`id_langkah_masak`);

--
-- Indeks untuk tabel `tbl_menu`
--
ALTER TABLE `tbl_menu`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indeks untuk tabel `tbl_penjadwalan`
--
ALTER TABLE `tbl_penjadwalan`
  ADD PRIMARY KEY (`id_penjadwal`),
  ADD KEY `id_resep` (`id_resep`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `tbl_post_user`
--
ALTER TABLE `tbl_post_user`
  ADD PRIMARY KEY (`id_post_user`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `tbl_request_resep`
--
ALTER TABLE `tbl_request_resep`
  ADD PRIMARY KEY (`id_request_resep`),
  ADD KEY `id_bahan` (`id_bahan`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `tbl_resep`
--
ALTER TABLE `tbl_resep`
  ADD PRIMARY KEY (`id_resep`);

--
-- Indeks untuk tabel `tbl_role`
--
ALTER TABLE `tbl_role`
  ADD PRIMARY KEY (`id_role`);

--
-- Indeks untuk tabel `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `role_id` (`role_id`);

--
-- Indeks untuk tabel `tbl_user_access_menu`
--
ALTER TABLE `tbl_user_access_menu`
  ADD PRIMARY KEY (`id_user_access_menu`),
  ADD KEY `id_role` (`id_role`),
  ADD KEY `id_menu` (`id_menu`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tbl_bahan`
--
ALTER TABLE `tbl_bahan`
  MODIFY `id_bahan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT untuk tabel `tbl_komentar`
--
ALTER TABLE `tbl_komentar`
  MODIFY `id_komentar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tbl_komentar_post_user`
--
ALTER TABLE `tbl_komentar_post_user`
  MODIFY `id_komentar_post_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tbl_langkah_masak`
--
ALTER TABLE `tbl_langkah_masak`
  MODIFY `id_langkah_masak` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `tbl_menu`
--
ALTER TABLE `tbl_menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `tbl_penjadwalan`
--
ALTER TABLE `tbl_penjadwalan`
  MODIFY `id_penjadwal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `tbl_post_user`
--
ALTER TABLE `tbl_post_user`
  MODIFY `id_post_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tbl_resep`
--
ALTER TABLE `tbl_resep`
  MODIFY `id_resep` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `tbl_role`
--
ALTER TABLE `tbl_role`
  MODIFY `id_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `tbl_user_access_menu`
--
ALTER TABLE `tbl_user_access_menu`
  MODIFY `id_user_access_menu` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tbl_user_access_menu`
--
ALTER TABLE `tbl_user_access_menu`
  ADD CONSTRAINT `tbl_user_access_menu_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `tbl_role` (`id_role`),
  ADD CONSTRAINT `tbl_user_access_menu_ibfk_2` FOREIGN KEY (`id_menu`) REFERENCES `tbl_menu` (`id_menu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
