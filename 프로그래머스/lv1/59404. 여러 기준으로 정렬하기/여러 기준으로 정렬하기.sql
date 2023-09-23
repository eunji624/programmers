# SELECT ANIMAL_ID, NAME, DATETIME from 
# (SELECT ANIMAL_ID, NAME, DATETIME from ANIMAL_INS
# case when (select distinct(NAME), DATETIME from ANIMAL_INS) order by DATETIME desc
#     else order by NAME)
    
# SELECT ANIMAL_ID, NAME, DATETIME from ANIMAL_INS 
# order by DATETIME

# (select distinct(NAME) from ANIMAL_INS
# order by NAME)

select ANIMAL_ID, 
       NAME, 
       DATETIME
       
  from ANIMAL_INS
 group by ANIMAL_ID
 order by NAME, DATETIME desc