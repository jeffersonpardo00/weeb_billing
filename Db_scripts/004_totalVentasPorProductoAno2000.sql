/****** Script para el comando SelectTopNRows de SSMS  ******/

SELECT a.[id_product],a.[product_name], SUM(a.[purchase_value]) AS TotalItemsOrdered
from
(
SELECT i.[id_product]
      ,i.[product_name]
	  ,p.[purchase_value]
	  ,b.[purchase_date]
FROM [dbo].[inventory] i
join [dbo].[purchase] p
on i.[id_product] = p.[id_product]
join [dbo].[bill] b
on b.[id_bill] = p.id_bill
where b.[purchase_date] > Cast('01/01/2000' as datetime) and [purchase_date] <=   Cast('12/30/2000' as datetime)
)a
group by a.[id_product],a.[product_name]
order by a.[id_product]
