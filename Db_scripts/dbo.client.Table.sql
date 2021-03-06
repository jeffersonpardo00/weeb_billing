/****** Object:  Table [dbo].[client]    Script Date: 04/07/2022 22:31:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[client](
	[id_client] [int] IDENTITY(1,1) NOT NULL,
	[name1] [varchar](255) NULL,
	[name2] [varchar](255) NULL,
	[last_name1] [varchar](255) NULL,
	[last_name2] [varchar](255) NULL,
	[birth_date] [date] NULL,
	[ident_num] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_client] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[client] ON 

INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (1, N'Carley', N'Michelina', N'McIlvaney', N'Renzullo', CAST(N'1967-12-06' AS Date), 2123313828)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (10, N'Riccardo', N'Gleda', N'Schroter', N'Campkin', CAST(N'1980-05-28' AS Date), 1666995819)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (14, N'Tammy', N'Eward', N'Tuffley', N'Ruddiforth', CAST(N'1996-08-24' AS Date), 1998200470)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (15, N'Forester', N'Byron', N'Aery', N'Meaden', CAST(N'1973-06-21' AS Date), 221885674)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (17, N'Shelbi', N'Vonnie', N'Bartalin', N'Peacocke', CAST(N'2001-01-21' AS Date), 1628162946)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (20, N'Alfred', N'Jada', N'Clarkson', N'Consadine', CAST(N'1981-11-16' AS Date), 2124121755)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (23, N'Amalia', N'Christie', N'McCurtain', N'Siseland', CAST(N'1990-04-18' AS Date), 534213598)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (25, N'Kippie', N'Robin', N'Kearey', N'Olivetta', CAST(N'1968-04-05' AS Date), 1350138998)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (28, N'Rosemonde', N'Toiboid', N'Milbank', N'Birth', CAST(N'1996-11-24' AS Date), 1486184449)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (31, N'Valli', N'Nev', N'Spittall', N'Morgan', CAST(N'1969-09-04' AS Date), 772999230)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (43, N'Fletcher', N'Madelle', N'Sweetzer', N'Rippen', CAST(N'1960-10-02' AS Date), 1335911513)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (60, N'Riccardo', N'Gleda', N'Schroter', N'Campkin', CAST(N'1980-05-28' AS Date), 1666995819)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (64, N'Tammy', N'Eward', N'Tuffley', N'Ruddiforth', CAST(N'1996-08-24' AS Date), 1998200470)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (65, N'Forester', N'Byron', N'Aery', N'Meaden', CAST(N'1973-06-21' AS Date), 221885674)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (67, N'Shelbi', N'Vonnie', N'Bartalin', N'Peacocke', CAST(N'2001-01-21' AS Date), 1628162946)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (70, N'Alfred', N'Jada', N'Clarkson', N'Consadine', CAST(N'1981-11-16' AS Date), 2124121755)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (73, N'Amalia', N'Christie', N'McCurtain', N'Siseland', CAST(N'1990-04-18' AS Date), 534213598)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (75, N'Kippie', N'Robin', N'Kearey', N'Olivetta', CAST(N'1968-04-05' AS Date), 1350138998)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (78, N'Rosemonde', N'Toiboid', N'Milbank', N'Birth', CAST(N'1996-11-24' AS Date), 1486184449)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (81, N'Valli', N'Nev', N'Spittall', N'Morgan', CAST(N'1969-09-04' AS Date), 772999230)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (93, N'Fletcher', N'Madelle', N'Sweetzer', N'Rippen', CAST(N'1960-10-02' AS Date), 1335911513)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (102, N'string', N'string', N'string', N'string', CAST(N'2022-06-29' AS Date), 0)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (103, N'string', N'string', N'string', N'string', CAST(N'2022-06-29' AS Date), 0)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (104, N'string', N'string', N'string', N'string', CAST(N'2022-06-29' AS Date), 0)
INSERT [dbo].[client] ([id_client], [name1], [name2], [last_name1], [last_name2], [birth_date], [ident_num]) VALUES (105, N'string prueba', N'string', N'string', N'string', CAST(N'2022-06-29' AS Date), 0)
SET IDENTITY_INSERT [dbo].[client] OFF
GO
