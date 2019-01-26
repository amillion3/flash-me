CREATE DATABASE  IF NOT EXISTS `flashme` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `flashme`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: flashme
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cards` (
  `cardid` int(11) NOT NULL AUTO_INCREMENT,
  `deckid` int(11) NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cardid`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,1,'What is C#?','Strongly typed, Object Oriented, general purpose programming language'),(2,1,'What is .NET?','An integral component of Windows that includes a virutal execution system (common language runtime - CLR). IE, C# is written and compiled down to a .exe or .dll file which is interprted by the CLR.'),(3,2,'how are you?','just fine, thanks'),(4,1,'Describe the basic construction of a C# program?','A typical C# program consists of a namespace declaration, a class, methods, attributes, a main method, statements, expressions, and comments.'),(5,1,'Explain what a namespace is in C#?','They are used to organize large code projects. “System” is the most widely used namespace in C#. We can create our own namespace and use one namespace in another, which are called Nested Namespaces.'),(6,1,'What is Object Oriented Programming?','A programming pattern where the solution is modeled as a collection of collaborating objects. These objects collaborate by sending messages to each other.'),(7,1,'What are the 4 principles of OOP?','Encapsulation, Abstraction, Inheritance, and Polymorphism.'),(8,1,'Regarding OOP, what is encapsulation?','Encapsulation is achieved when each object keeps its state private, inside a class. Other objects don’t have direct access to this state. Instead, they can only call a list of public functions — called methods.'),(9,1,'Regarding OOP, what is abstraction?','Applying abstraction means that each object should only expose a high-level mechanism for using it.'),(10,1,'Regarding OOP, what is inheritance?','It means that you create a (child) class by deriving from another (parent) class. This way, we form a hierarchy.'),(11,1,'Regarding OOP, what is polymorphism?','This typically happens by defining a (parent) interface to be reused. It outlines a bunch of common methods. Then, each child class implements its own version of these methods.'),(16,1,'What is the `using` keyword for?','Used for including namespaces in one specific block of the program.'),(17,1,'What are variables?','Data members of a class, used for storing data.'),(18,1,'What is a value type?','A value type holds the data within its own memory allocation. Stored on the stack. IE numbers, Boolean, Char, Date, Enum'),(19,1,'What is a reference type?','A reference type is a pointer to another memory location that holds the data. Stored on the heap. IE, strings, arrays, class types.'),(20,1,'What is a `class`?','A Class is an encapsulation of properties and methods that are used to represent a real-time entity. It is a data structure that brings all the instances together in a single unit.'),(21,1,'What is an `object`?','Objects are usable instances of classes. Creating an object is called `instantiation`.'),(22,1,'What is an enum in C#?','A value type with a set of related, named constants.  IE, `enum DayOfWeek {Sat, Sun, Mon, Tues, Wed, Th, Fri}`'),(23,1,'What is a method?','A method is an action that an object can perform.'),(24,1,'What is an `overload`?','Passing parameters of with specific types, orders and number of inputs to a method.'),(25,1,'What is a constructor?','Class methods that are executed automatically when an object of a given type is created.'),(26,1,'What are the top 3 access modifiers?','Public, Private, Protected'),(27,1,'What does the `public` access modifier do?','Public - The member can be accessed by any other code in the same assembly or an assembly that references it.'),(28,1,'What does the `private` access modifier do?','Private - The member can only be accessed by code in the same class.'),(29,1,'What does the `protected` access modifier do?','Protected - The member can only be accessed by code in the same class or in a derived class.'),(30,1,'What is the syntax for inheritance from a base class?','`class DerivedClass : BaseClass {}`'),(31,1,'What are the 3 overrides?','Virtual, override, abstract'),(32,1,'What is a virtual override?','Allows a class member to be overriden in a derived class.'),(33,1,'What is an override?','Overrides a virtual (overridable) member defined in the base class.'),(34,1,'What is an abstract override?','Requires that a class member to be overriden in the derived class.'),(35,1,'What is the difference between `virtual` and `abstract` methods?','A Virtual method must always have a default implementation. However, it can be overridden in the derived class, though not mandatory. It can be overridden using override keyword.'),(36,1,'What is the difference between `virtual` and `abstract` methods?','An Abstract method does not have an implementation. It resides in the abstract class. It is mandatory that the derived class implements the abstract method. An override keyword is not necessary here though it can be used.'),(37,1,'What is an interface?','An interface represents a contract, in that a class that implements an interface MUST implement every aspect of that interface exactly as it is defined.'),(38,1,'What is an abstract class?','An Abstract class is a class which is denoted by abstract keyword and can be used only as a Base class. An Abstract class should always be inherited.'),(39,1,'What is the difference between interface and abstract class?','Interface has multiple inheritance, only provides the signature, cannot have access modifiers (all public). Abstract class has single inheritance only, can provide complete code OR provide a signature to be overriden, can have access modifiers.'),(40,1,'How is exception handling implemented in C#?','try - Contains a block of code for which an exception will be checked.  catch - It is a program that catches an exception with the help of exception handler.'),(41,1,'What are boxing and unboxing?','Converting a value type to a reference type is boxing. Explicit conversion of same reference type back to value type is unboxing.'),(42,2,'How do you stay active in the tech community?','I attend meetups (name them) to meet people and learn new things. I follow industry leaders on twitter (name some). I follow these blogs/news pages (name them).'),(43,2,'What are the responsibilities of a web developer?','A web dev designs, develops, enhances, tests and deploys web apps that are engaging and user-friendly site. A dev gathers and defines requirements, maintains websites, troubleshoots and fixes bugs, follows best practices and collaborates with other teams.'),(44,2,'What steps do you take to balance demanding client requirements?','Performance under pressure, Communication Skills, Commitment to releasing high-quality products.'),(45,2,'Describe the management style that will bring forth your best work and efforts.','I prefer a management style where the manager is willing to dig in and help as needed, but give me (and the team) autonomy to make decisions.');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `decks`
--

DROP TABLE IF EXISTS `decks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `decks` (
  `deckid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `publicdeck` tinyint(4) NOT NULL DEFAULT '0',
  `deckcreatorid` int(11) NOT NULL,
  `datecreated` date DEFAULT NULL,
  `datelastmodified` date DEFAULT NULL,
  PRIMARY KEY (`deckid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `decks`
--

LOCK TABLES `decks` WRITE;
/*!40000 ALTER TABLE `decks` DISABLE KEYS */;
INSERT INTO `decks` VALUES (1,'C#','Development',1,1,'2019-01-01','2019-01-05'),(2,'Interview Questions','Interview',1,1,'2019-01-01','2019-01-07');
/*!40000 ALTER TABLE `decks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `history` (
  `historyid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `cardid` int(11) NOT NULL,
  `difficulty` decimal(10,0) DEFAULT NULL,
  `daysbwreviews` int(11) DEFAULT NULL,
  `datelastreviewed` date DEFAULT NULL,
  PRIMARY KEY (`historyid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdeckpairing`
--

DROP TABLE IF EXISTS `userdeckpairing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `userdeckpairing` (
  `userdeckpairingid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `deckid` int(11) NOT NULL,
  PRIMARY KEY (`userdeckpairingid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdeckpairing`
--

LOCK TABLES `userdeckpairing` WRITE;
/*!40000 ALTER TABLE `userdeckpairing` DISABLE KEYS */;
INSERT INTO `userdeckpairing` VALUES (1,1,1);
/*!40000 ALTER TABLE `userdeckpairing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `namefirst` varchar(255) DEFAULT NULL,
  `namelast` varchar(255) DEFAULT NULL,
  `datejoined` date DEFAULT NULL,
  `datelastvisit` date DEFAULT NULL,
  `deckcurrentlyloaded` int(11) DEFAULT NULL,
  `deckscurrentlyused` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Andy','Million','2017-06-15','2017-08-15',1,'1,2'),(2,'Joe','Smith','2018-06-15','2018-09-15',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersettings`
--

DROP TABLE IF EXISTS `usersettings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usersettings` (
  `usersettingsid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `colortheme` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`usersettingsid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersettings`
--

LOCK TABLES `usersettings` WRITE;
/*!40000 ALTER TABLE `usersettings` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersettings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-25 22:39:49
