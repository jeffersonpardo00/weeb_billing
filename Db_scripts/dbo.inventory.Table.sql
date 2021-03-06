/****** Object:  Table [dbo].[inventory]    Script Date: 04/07/2022 22:31:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[inventory](
	[id_product] [int] IDENTITY(1,1) NOT NULL,
	[product_name] [varchar](255) NULL,
	[product_price] [float] NULL,
	[product_num_units] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_product] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[inventory] ON 

INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (1, N'faucibus', 2235.62, 30)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (2, N'quam pharetra', 3292.19, 68)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (3, N'sapien dignissim', 6991.52, 22)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (4, N'nisl duis', 2818.53, 21)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (5, N'et ultrices', 3547.56, 54)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (6, N'vel ipsum', 3960.18, 74)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (7, N'turpis', 6637.64, 80)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (8, N'eu massa donec', 899.14, 70)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (9, N'in hac', 2062.39, 93)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (10, N'aliquam', 3538.59, 41)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (11, N'turpis nec', 3802.69, 34)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (12, N'a', 2617.73, 87)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (13, N'pulvinar sed nisl', 6917.15, 1)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (14, N'in faucibus orci', 1252.82, 34)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (15, N'mattis nibh', 1903.88, 46)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (16, N'pede', 646.73, 70)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (17, N'arcu libero', 4079.19, 36)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (18, N'turpis', 6464.53, 21)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (19, N'mauris eget massa', 1056.55, 9)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (20, N'justo', 5329.56, 40)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (21, N'in lectus', 4264.02, 61)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (22, N'vel', 4386.15, 35)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (23, N'platea', 5232.32, 35)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (24, N'metus', 1283.44, 6)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (25, N'tincidunt eget', 1156.14, 54)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (26, N'augue quam sollicitudin', 1038.29, 58)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (27, N'quis', 1026.19, 76)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (28, N'duis', 638.95, 69)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (29, N'eleifend', 4206.09, 27)
INSERT [dbo].[inventory] ([id_product], [product_name], [product_price], [product_num_units]) VALUES (30, N'egestas metus aenean', 3482.04, 28)
SET IDENTITY_INSERT [dbo].[inventory] OFF
GO
