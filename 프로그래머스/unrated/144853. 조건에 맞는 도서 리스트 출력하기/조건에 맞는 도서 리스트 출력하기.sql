select book_id, SUBSTRING(published_date, 1, 10) from BOOK
where year(PUBLISHED_DATE) = 2021 
    and CATEGORY in ('인문')
order by published_date