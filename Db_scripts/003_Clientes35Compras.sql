/****** Script para el comando SelectTopNRows de SSMS  ******/
SELECT c.[id_client]
      ,c.[name1]
      ,c.[name2]
      ,c.[last_name1]
      ,c.[last_name2]
      ,c.[birth_date]
      ,c.[ident_num]
	  ,b.[purchase_date]
  FROM [dbo].[client] c
  join [dbo].[bill]b
  on b.[id_client] = c.[id_client]
  WHERE DATEDIFF(year, c.[birth_date] , GETDATE()) < = 35
  and [purchase_date] > Cast('02/01/2000' as datetime) and [purchase_date] <=   Cast('03/25/2000' as datetime)

