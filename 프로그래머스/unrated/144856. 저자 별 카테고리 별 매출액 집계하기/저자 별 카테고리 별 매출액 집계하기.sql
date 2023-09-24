# select a.AUTHOR_ID,
#        a.AUTHOR_NAME,
#        b.CATEGORY,
#        s.SALES * b.PRICE as TOTAL_SALES
#        from AUTHOR a
#  inner join BOOK b on a.AUTHOR_ID = b.AUTHOR_ID
#  inner join (
#              select * from BOOK_SALES
#              where SALES_DATE like '2022-01-%'   
#             )s on b.BOOK_ID = s.BOOK_ID
#  group by a.AUTHOR_ID, b.CATEGORY
#  order by a.AUTHOR_ID, b.CATEGORY desc



SELECT A.AUTHOR_ID, A.AUTHOR_NAME, B.CATEGORY, SUM(S.SALES*PRICE)
FROM 
    BOOK_SALES S
    ,BOOK B
    ,AUTHOR A
WHERE 
    S.BOOK_ID = B.BOOK_ID
    AND B.AUTHOR_ID = A.AUTHOR_ID
    AND (YEAR(S.SALES_DATE) = 2022 AND MONTH(S.SALES_DATE) = 1)
GROUP BY A.AUTHOR_ID, B.CATEGORY
ORDER BY 1 ASC, 3 DESC
;