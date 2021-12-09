USE [cm_editorial_comments]
GO
DROP SCHEMA [cm_editorial_comments]
GO

USE [cm_editorial_comments]
GO
DROP USER [cm_editorial_comments]
GO

USE [master]
GO
DROP LOGIN [cm_editorial_comments]
GO

EXEC msdb.dbo.sp_delete_database_backuphistory @database_name = N'cm_editorial_comments'
GO
USE [master]
GO
ALTER DATABASE [cm_editorial_comments] SET SINGLE_USER WITH ROLLBACK IMMEDIATE
GO
USE [master]
GO
DROP DATABASE [cm_editorial_comments]
GO
