/****** Object:  StoredProcedure [dbo].[insertBill]    Script Date: 04/07/2022 22:31:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:      jefferson pardo
-- Create Date: 30/06/2022
-- Description: devuelve id_bill insertada
-- =============================================
CREATE PROCEDURE [dbo].[insertBill] 
(
    @id_client int,
	@purchase_date date
)
AS
DECLARE @Identity INT
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

    -- Insert statements for procedure here
    INSERT INTO dbo.bill (id_client, purchase_date) VALUES(2, '2019-05-11T00:00:00')
	SET @Identity = SCOPE_IDENTITY()

	return @Identity

END
GO
