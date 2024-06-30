CREATE TABLE `turs_subscribers` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `fullName` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `visited` boolean NOT NULL DEFAULT false,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  `updatedAt` timestamp NOT NULL DEFAULT (now())
);
