
  SELECT cli.[id_client]
      ,cli.[name1]
      ,cli.[name2]
      ,cli.[last_name1]
      ,cli.[last_name2]
      ,cli.[birth_date]
      ,cli.[ident_num]
	  ,cal.next_purchse_date
from 
(

  select 
  c_prom.[id_client],
  DATEADD(day, c_prom.promedio_compra, c_max.max_date) AS next_purchse_date
  from
  (
	  SELECT 
		a.[id_client],
		DATEDIFF ( minute , MIN(a.[purchase_date]) , max(a.[purchase_date]) ) /((COUNT(*)-1)*1440) as promedio_compra
		FROM
		(
			SELECT c.[id_client]
			  ,b.[purchase_date]
		  FROM [dbo].[client] c
		  join [dbo].[bill]b
		  on b.[id_client] = c.[id_client]
		)a
	  group by a.[id_client]
	  HAVING COUNT(*) > 1
  ) c_prom
  join
  (
	  SELECT  m.[id_client], max(m.[purchase_date]) as max_date
	  from
	  (
		  SELECT c.[id_client]
			  ,b.[purchase_date]
		  FROM [dbo].[client] c
		  join [dbo].[bill]b
		  on b.[id_client] = c.[id_client]
	  ) m
	  group by m.[id_client]
  ) c_max
  on c_prom.[id_client] = c_max.[id_client]

)cal
join [dbo].[client] cli
on cli.[id_client] = cal.[id_client]