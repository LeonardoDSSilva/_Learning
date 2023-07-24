USE [balta]


CREATE OR ALTER VIEW vwCourse AS
    SELECT
        [Course].[Id],
        [Course].[Tag],
        [Course].[Title],
        [Course].[Url],
        [Course].[Summary],
        [Category].[Title] AS [Category Title],
        [Author].[Name] AS [Author Name]
    FROM
        [Course]
        INNER JOIN [Category] ON [Course].[CategoryId] = [Category].[Id]
        INNER JOIN [Author] ON [Course].[AuthorId] = [Author].[Id]
    WHERE
        [Active] = 1

SELECT * FROM vwCourse ORDER BY [Title]

---

SELECT
    [Career].[Title],
    COUNT([Id]) AS [Quantity Courses]
FROM
    [Career]
    INNER JOIN [CareerItem] ON [Career].[Id] = [CareerItem].[CareerId]
GROUP BY
    [Career].[Title]

---

DECLARE @stringGuid UNIQUEIDENTIFIER = (SELECT NEWID())

INSERT INTO [Student] (
    [Id], [Name], [Email], [CreateDate]
) VALUES(
    @stringGuid, 'Eduardo Pires', 'mail@mail.com', GETUTCDATE()
)

INSERT INTO [StudentCourse] (
    [StudentId], [CourseId], [Progress], [Favorite], [StartDate]
) VALUES(
    @stringGuid, '5c349b3c-e717-9a7d-1241-0fcb00000000', 0, 0, GETDATE()
)

SELECT * FROM [StudentCourse]
SELECT * FROM [Student]

---

DECLARE @StudentId UNIQUEIDENTIFIER = '1c37821e-d26f-45be-b7f8-fb181d13ada3'

SELECT
    [Student].[Name] AS [Student Name],
    [Course].[Title] AS [Course Title],
    [StudentCourse].[Progress],
    [StudentCourse].[LastUpdateDate]
FROM
    [StudentCourse]
    INNER JOIN [Course] ON [StudentCourse].[CourseId] = [Course].[Id]
    INNER JOIN [Student] ON [StudentCourse].[StudentId] = [Student].[Id]
WHERE
    [Student].[Id] = @StudentId AND
    [StudentCourse].[Progress] < 100 AND
    [StudentCourse].[Progress] > 0
ORDER BY
    [StudentCourse].[LastUpdateDate] DESC

---
SELECT
    [Student].[Name],
    [Course].[Title],
    [StudentCourse].[Progress],
    [StudentCourse].[LastUpdateDate]
FROM
    [Course]
    LEFT JOIN [StudentCourse] ON [Course].[Id] = [StudentCourse].[CourseId]
    LEFT JOIN [Student] ON [StudentCourse].[StudentId] = [Student].[Id]
--
CREATE OR ALTER PROCEDURE spStudentProgress(
    @StudentId UNIQUEIDENTIFIER) AS
        SELECT
            [Student].[Name] AS [Student Name],
            [Course].[Title] AS [Course Title],
            [StudentCourse].[Progress],
            [StudentCourse].[LastUpdateDate]
        FROM
            [StudentCourse]
            INNER JOIN [Course] ON [StudentCourse].[CourseId] = [Course].[Id]
            INNER JOIN [Student] ON [StudentCourse].[StudentId] = [Student].[Id]
        WHERE
            [Student].[Id] = @StudentId AND
            [StudentCourse].[Progress] < 100
        ORDER BY
            [StudentCourse].[LastUpdateDate] DESC


EXEC spStudentProgress '1c37821e-d26f-45be-b7f8-fb181d13ada3'

---
CREATE OR ALTER PROCEDURE spDeleteStudent(
    @StudentId UNIQUEIDENTIFIER) AS
        BEGIN TRANSACTION

            DELETE FROM [StudentCourse] WHERE [StudentId] = @StudentId
            DELETE FROM [Student] WHERE [Id] = @StudentId

        COMMIT TRANSACTION



