# PORTFOLIO BACKEND - York Full Stack Web Development Program: Final Project

## Deploying to Google Cloud Platform:
1. Create a new projects on Google Cloud Platform:
    - Enable the Cloud SQL service.
    - Enable the Cloud SQL Admin API.
    - Create a new instance using the MySQL engine. You will create a root password during this step, take note of it (\<MYSQL ROOT PASSWORD>)
    - Once the instance is ready, take note of the instance connection name (\<MYSQL INSTANCE CONNECTION NAME>).
    - Create a new database and take note of its name (\<DB NAME>).
    - Create a new user for the database and take note of the username and password (\<DB USERNAME> - \<DB USER PASSWORD>).
2. In the root folder of your project, rename the provided `app.yaml.example` file to `app.yaml` and enter the information you saved from the previous steps.
3. Deploy the app:
    - In a terminal window, run `gcloud app deploy` from the root folder of your project.
    - You will be provided a URL to be used to connect to your API from the frontend of the application.

## CREATE AND POPULATE THE DATABASE TABLES
1. Connect to your MySQL instance:
    - Find and take note of your public IP address using a service such as https://www.whatismyip.com/ (\<MY IP ADDRESS>).
    - In your Google Cloud Platform, access the MYSQL instance created during the app deployment.
    - Copy the Public IP address from the Overview section (\<MYSQL IP ADDRESS>).
    - In the Connections section, under Connectivity, click Add network. In the Network field, insert \<MY IP ADDRESS> in order to access your MySQL instance from your local machine. Click Save.
    - Open up MySQL Workbench (or equivalent) and create a new connection using:
        * 'Hostname': \<MYSQL IP ADDRESS>
        * 'Port': 3306 (default)
        * 'Username': \<DB USER NAME>
        * 'Password': \<DB USER PASSWORD>.
2. Run the following scripts to create the database tables:
```sql
CREATE TABLE `users` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
```
```sql
CREATE TABLE `projects` (
  `ProjectID` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) NOT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `Descr` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ProjectID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
```
```sql
CREATE TABLE `formsubs` (
  `SubID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` varchar(50) DEFAULT NULL,
  `Subject` varchar(50) NOT NULL,
  `Message` longtext NOT NULL,
  PRIMARY KEY (`SubID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
```
```sql
CREATE TABLE `jobs` (
  `JobID` int NOT NULL AUTO_INCREMENT,
  `StartDate` date DEFAULT NULL,
  `EndDate` date DEFAULT NULL,
  `Title` varchar(255) NOT NULL,
  `Employer` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `Country` varchar(255) NOT NULL,
  PRIMARY KEY (`JobID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
```
```sql
CREATE TABLE `duties` (
  `DutyID` int NOT NULL AUTO_INCREMENT,
  `JobID` int NOT NULL,
  `Descr` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`DutyID`),
  KEY `JobID_idx` (`JobID`),
  CONSTRAINT `JobID` FOREIGN KEY (`JobID`) REFERENCES `jobs` (`JobID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
```
3. Run the following scripts to populate two sample database tables:
```sql
INSERT INTO `jobs`
(`StartDate`,
`EndDate`,
`Title`,
`Employer`,
`City`,
`Country`)
VALUES
('2018-02-01',
null,
'Current job title',
'Current employer',
'Current city',
'Current country'),
('2014-01-01',
'2018-01-01',
'Previous job title',
'Previous employer',
'Previous city',
'Previous country');
```
```sql
INSERT INTO `myPortfolio`.`projects`
(`Title`,
`Image`,
`Descr`)
VALUES
('A long road',
'https://picsum.photos/id/563/300/300',
'Project: A long road'),
('Reaching the sky',
'https://picsum.photos/id/328/300/300',
'Project: Reaching the sky'),
('Coffee break',
'https://picsum.photos/id/431/300/300',
'Project: Coffee break');
```