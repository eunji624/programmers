# select u.AGE, a.JOINED, count(*) from USER_INFO u
# inner join (select AGE, JOINED from USER_INFO
# where JOINED like '2021%'
# )a on a.AGE = u.AGE
# where u.AGE between '20' and '30'
# order by u.AGE desc

select count(user_id) from USER_INFO
where year(JOINED) = 2021 and AGE >= 20 and AGE < 30


