select PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(TLNO, 'NONE') 
from PATIENT 
where AGE <= 12 and GEND_CD in ('w')
order by AGE desc, PT_NAME



# select 
# case when TLNO is NULL then 'NONE' end from PATIENT