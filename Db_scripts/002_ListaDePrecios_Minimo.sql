/****** Script para el comando SelectTopNRows de SSMS  ******/
SELECT [id_product]
      ,[product_name]
      ,[product_price]
      ,[product_num_units]
  FROM [dbo].[inventory]
  WHERE [product_num_units] <= 5;