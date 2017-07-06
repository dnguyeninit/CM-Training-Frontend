USE [cm_caefeeder]
GO
DROP SCHEMA [cm_caefeeder]
GO

USE [cm_caefeeder]
GO
DROP USER [cm_caefeeder]
GO

USE [master]
GO
DROP LOGIN [cm_caefeeder]
GO

EXEC msdb.dbo.sp_delete_database_backuphistory @database_name = N'cm_caefeeder'
GO
USE [master]
GO
ALTER DATABASE [cm_caefeeder] SET SINGLE_USER WITH ROLLBACK IMMEDIATE
GO
USE [master]
GO
DROP DATABASE [cm_caefeeder]
GO
