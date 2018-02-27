/**
 * Created by luoming on 2018/2/24
 */
/**
 * sql查询语句
 * 1，基本查询  select 列名1,列名2 from 表名
 * 2，条件查询  select 列名1,列名2 from 表名 where 列名1 运算符 值
 *              运算符 : = 等于  <> 不等于  > 大于  < 小于  <=  >=    between 在某个范围内  like 某种搜索模式
 *              eg: select Age from Students where Age between 18 and 20  //查询年龄在18 到 20之间的数据
 *
 *              like通配符(% _ [] [^]) % 代替一个或多个字符  _ 仅代替一个字符 [] 字符列表中任何单一字符
 *              eg: select Name from Student where Name like '罗%'  //查询姓氏为 罗 的数据
 *              eg: select Name from Student where Name like '%明'  //查询名字最后一个为 明 的数据
 *              eg: select Name from Student where Name like '%小%' //查询名字中含有 小 的数据
 *              eg: select Name from Student where Name like '罗_'  //查询姓 罗 且名字为两个字的数据
 *              eg: select Name from Student where Name like '[罗陈]%' //查询姓 罗 或 陈 的数据
 *              eg: select * from Student where Age >18 and Name like '罗%' //查询年龄大于18 且姓 罗 的数据
 *              eg: select * from Student where Name like '罗_' or Name like '陈%' //查询姓 罗 或 姓 陈 的数据
 *              eg: select * from Student where Age in (18,19,20) //查询年龄是 18,19,20 的数据
 *              eg: select * from Student where Age between 20 and 30 //查询年龄为20 到30 之间的数据
 *              eg: select * from Student where Name not like '罗%' // 查询姓氏不为 罗 的数据
 *
 * 3，排序      order by (ASC 升序-默认，DESC 降序)
 *              eg: select Age from Student order by Age // 查询年龄数据 并按年龄升序排列 (默认升序)
 *              eg: select Age from Student order by Age ASC // 查询年龄数据 并按年龄升序排列
 *              eg: select Age from Student order by Age DESC // 查询年龄数据 并按年龄降序排列
 *              eg: select Score,Id from Student order by Score ASC,Id DESC //查询数据 按成绩升序，id降序排列 (首先按成绩升序排列，如果有多个成绩相同，再按id降序排列)
 *
 * 4，排除重复  distinct (查询时忽略重复值)
 *              eg: select distinct City from Student // 查询城市数据，排除重复
 *
 * 5，max/min   查找最大值/最小值
 *              eg: select max(Score) from Student //查询最高成绩
 *              eg: select min(Score) from Student //查询最低成绩
 *
 * 6，sum       查询某列的合计值
 *              eg: select sum(math) from Student // 查询数学总成绩
 *              eg: select sum(chinese),sum(english),sum(math) from Student // 查询语文 英语 数学 总成绩
 *              eg: select sum(chinese + math + english) from Student // 查询 总成绩
 *
 * 7，avg       查询某列值的平均值
 *              eg: select avg(math) from Student //查询数学平均成绩
 *
 * 8，count     函数返回匹配指定条件的行数
 *              eg: select count(Id) from Student // 查询学生总数
 *              eg: select count(distinct Age) from Student // 查询学生年龄分布总数（忽略重复值）
 *              eg: select count(Id) from Student where Sex='男'// 查询男生总数
 *              eg: select Sex , count(Id) from Student group by Sex // 查询男女生各有多少人
 *
 * 9，group by  用于结合合计函数，根据一个或多个列对结果集进行分组
 *              eg: select Sex ,count(Id) from Student group by Sex // 查询男女生各有多少人
 *              eg: select Customer,sum(OrderPrice) from Student group by Customer //
 *
 * 10，top      用于规定要返回的记录的数目。
 *              eg: select top 3 * from Student order by Age // 查询年龄最小的3个学生
 *              eg: select top 50 percent * from Student  //选取50% 的记录
 *
 * 11，limit    常用于分页
 *              eg: select * from Student limit 10 // 查询前10行数据 显示1-10条数据
 *              eg: select * from Student limit 1,10 //从第二行开始查询10条数据，从第二行到第十一行
 *              eg: select * from Student limit 5,10 //从地六行开始查询10条数据，从第六行到第十五行
 * sql插入语句
 * 1，insert    用于向表格中插入新的行
 *              eg: insert into Student (Age,Id) values (26,'1')
 *
 *
 *
 * sql 更新语句
 * 1，update    用于修改表中的数据
 *              eg: update Student set Age=26 where Name='luoming' // 为名字是 luoming 的人修改年龄为26
 *              eg: update Student set Age=28,wife='chenweichang' where Name='luoming'
 *
 *
 * sql 删除语句
 * 1，delete   用于删除表中的行
 *             eg: delete from Student where Name='luoming' //删除名称为 luoming 的这一行
 *             eg: delete from Student /delete * from Student  //删除所有行
 *
 *
 * 查询多个表
 * 1，基本查询
 *            eg: select Person.firstName,Person.lastName,Student.Id from Person,Student where Person.Age=Student.Age // 查询姓和名、id根据两个表之间相同的Age字段
 *
 * 2，join/ inner join  在表中存在至少一个匹配时，INNER JOIN 关键字返回行
 *            eg: select Person.firstName,Person.lastName,Student.Id from Person inner join Student on Person.Age=Student.Age// 查询姓和名、id根据两个表之间相同的Age字段
 *
 * 3，left join         从左表返回所有的行，即使在右表中没有匹配的行。如果左表中某行在右表没有匹配，则结果中对应行右表的部分全部为空(NULL)
 *            eg: select Person.firstName,Person.lastName,Student.Id from Person left join Student on Person.Age=Student.Age //
 *
 * 4，right join        从右表返回所有的行，即使在左表中没有匹配的行。如果右表中某行在左表没有匹配，则结果中对应行左表的部分全部为空(NULL)
 *
 *            eg: select Person.firstName,Person.lastName,Student.Id from Person right join Student on Person.Age=Student.Age
 *
 * 5，full join         left join 与right join的结合
 *            eg: select Person.firstName,Person.lastName,Student.Id from Person full join Student on Person.Age=Student.Age
 *
 *
 *
 *  其他操作符
 *
 *  1，union / union all 用于合并两个或多个 SELECT 语句的结果集(UNION 内部的 SELECT 语句必须拥有相同数量的列。列也必须拥有相似的数据类型。同时，每条 SELECT 语句中的列的顺序必须相同。)
 *            eg: select Age from Person union select Age from Student // 合并两个表的年龄信息（相同的会覆盖）
 *            eg: select Age from Person union all select Age from student // 合并两个表的年龄信息（相同的也会保留）
 *
 *
 *  2，select into       从一个表中选取数据，然后把数据插入另一个表中
 *            eg: select * into Student_Backup from Student //备份Student表
 *            eg: select firstName,lastName into Student_Backup from Student //备份Student表的部分字段
 *
 * 3，create database    创建数据库
 *            eg: create database my_db  // 创建 名为my_db的数据库
 *
 * 4，create table       创建数据库中的表
 *            eg: create table Student (firstName varchar(255),lastName varchar(255),id int) // 创建Student表 并规定了列名和数据类型
 *                //
 *
 * 5，约束
 *    1，not null        约束列强制不接受null值
 *            eg: create table Student (firstName varchar(255),id int not null) // 如果不添加id就无法插入或更新新记录
 *
 *    2，unique          约束唯一标识数据库表中的每条记录
 *            eg: create table Student (firstName varchar(255),id int not null,unique (id)) // 如果不添加id就无法插入或更新新记录，且id不能重复
 *            //当表已经被创建了，需要给id添加unique约束   alter table Student add unique (id)
 *
 *    3，primary key     约束唯一标识数据库表中的每条记录
 *            eg: create table Student (firstName varchar(255),id int not null,primary key (id)) // 如果不添加id就无法插入或更新新记录，且id不能重复
 *            //当表已经被创建了，需要给id添加unique约束   alter table Student add primary key (id)
 *
 *    4，check           约束用于限制列中的值的范围
 *            eg: create table Student (firstName varchar(255),id int not null,check (id>99)) // 如果不添加id就无法插入或更新新记录，且id要大于99
 *            //当表已经被创建了，需要给id添加unique约束   alter table Student add check (id>99)
 *
 *    5，default         约束用于向列中插入默认值
 *            eg: create table Student (firstName varchar(255) default 'luoming',id int not null) // 如果不添加id就无法插入或更新新记录，firstName默认值为'luoming'
 *            //当表已经被创建了，需要给id添加unique约束   alter table Student alter firstName set default 'luoming'
 *
 * 6，drop                删除表和数据库
 *            eg: drop database my_db // 删除 my_db 数据库
 *            eg: drop table Student  // 删除 表 Student
 *
 * 7，truncate            删除表数据  并不删除表本身
 *            eg: truncate table Student
 *
 * 8，alter               在已有的表中添加、修改或删除列
 *    1，增加列
 *            eg: alter table Student add id int // 在Student 表中新增一个名为 id 的新列 数据类型是int
 *    2，删除列
 *            eg: alter table Student drop column id //在Student表中删除 id 列
 *    3，修改列数据类型
 *            eg: alter table Student alter column id varchar // 修改Student表中 id 列的数据类型为长度可变的字符串
 *
 * 9，rename             重命名表
 *            eg: rename table Student to Person // 将Student表重命名为Person
 *
 * 10，desc              查询表结构
 *            eg: desc Student
 *
 * 11，is null / is not null
 *            eg: select firstName,lastName from Student where id is null // 查询 id 为空的姓名信息
 *            eg: select firstName,lastName from Student where id is not null // 查询 id 不为空的姓名信息
 *
 * 12,order by rand()   随机查询
 *            eg: select * from Student order by rand() limit 10 // 随机取10条记录
 *
 * 13，index            创建索引，加快索引速度，但会降低增删改的速度，一般建在数据量大、值比较唯一、经常查询的字段上
 *            eg: create index index_name on Student (name)  // 给Student表中的name列建立普通索引
 *            eg: create unique index index_name on Student (name) //给Student表中的name列建立唯一索引
 *            eg: alter table Student add index index_name (name)  // 给Student表中的name列建立普通索引
 *            eg: alter table Student add unique (name) //给Student表中的name列建立唯一索引
 *            eg: alter table Student add primary key (name) //给Student表中的name列建立主键索引
 *
 *
 *     nodejs 连接 mysql
 *             5.7之前的版本
 *                      window系统下安装msi格式的mysql成功后 ，初始管理账号是root，没有密码，所以第一次登录时只需要键入
 *                      mysql/mysql -u root 即可
 *            设置密码  mysql -u 用户名 -p 旧密码 password 新密码
 *                      eg: mysql -u root password 123456  // 给root设置密码123456 ，刚开始root没有密码，所以 -p 旧密码 一项就可以省略了
 *            设置密码之后的登录格式 ：
 *                      mysql -u root -p
 *                      Enter password:
 *            5.7及之后的版本(我现在安装的是5.7.21)
 *               教程地址 https://jingyan.baidu.com/article/d7130635f1c77d13fdf475df.html
 *
 *
 *
 *               //node.js
 *               let mysql =require('mysql');
                 let connection = mysql.createConnection({
                    host     : 'localhost',
                    user     : 'luoming',
                    password : 'TYlm920606',
                    database : 'test',
                 })
                 connection.connect();
                 connection.query('select * from Student where name="luoming"',(error,results,fields)=>{
                 if(error) throw error;
                 console.log(results);
                 })
 *
 */
