use `case5`;
insert into `room_types`(`type_name`)
values 
	("1 star"),
    ("2 star"),
    ("3 star"),
    ("4 star"),
    ("5 star");
insert into `rent_types`(`type_name`)
values 
	("Hours"),
    ("Days"),
    ("Months"),
    ("Years");
insert into `services`(`digit`,`name`,`value`)
values 
	("Slot","Massage",500000),
	("1 hour","Karaoke",500000),
	("Slot","Breakfast",200000),
	("Slot","Drink",200000),
	("1 day","Rent Car",600000);
insert into `positions`(`position_name`)
values
	("Receptionist"),
    ("Server"),
    ("Specialist"),
    ("Supervisor"),
    ("Manager"),
    ("Director");
insert into `departments` (`department_name`)
values
	("Sale-Marketing"),
    ("Administration"),
    ("Service"),
    ("Management");
insert into `educations` (`education_name`)
values
	("Intermediate"),
    ("College"),
    ("University"),
    ("Postgraduate");
insert into `customer_types` (`type_name`)
values
	("Diamond"),
    ("Platinum"),
    ("Gold"),
    ("Silver"),
    ("Member");
insert into `genders` (`gender_name`)
values
	("Male"),
    ("Female"),
    ("Other");
insert into `buildings` 
	(`name`,`area`,`price`,`capacity`,`rent_type_id`,`img`,
	`room_type_id`,`pool_area`,`level`)
values 
	("POOL VILLAS",300,5000000,10,4,
    "https://nhabephoanggia.vn/contents/images/mau-villa-dep-1.jpg",
    5, 40, 2),
	("BEACH FRONT VILLAS",400,6000000,8,3,
    "https://acihome.com.vn/uploads/15/thiet-ke-biet-thu-nghi-duong-2-tang-hien-dai-dt-650m2-co-ho-boi-4.jpg",
    5, 30, 3),
	("KING VILLAS",300,5000000,10,3,
    "https://quantrinhahang.edu.vn/wp-content/uploads/2019/04/villa-thiet-ke-hien-dai-voi-khong-gian-tach-biet.jpg",
    4, 35, 2);
insert into `buildings` 
	(`name`,`area`,`price`,`capacity`,`rent_type_id`,`img`,
	`room_type_id`,`level`)
values 
	("PRESIDENTIAL SUITE",200,3500000,5,3,
    "https://product.hstatic.net/200000504041/product/furama-villas-da-nang-12_a3f6fe63eb46487b8714716a7b053f11_master.jpg",
    3,2),
	("GARDEN DELUXE",250,4000000,5,3,
    "https://abogovillas.com/wp-content/uploads/2020/11/abogo-villa-danang-furama-tang1-4bedroom.jpg",
    3,2),
	("GARDEN SUPERIOR",200,3500000,4,4,
    "https://q-cf.bstatic.com/images/hotel/max1024x768/222/222053485.jpg",
    4,2);
insert into `buildings` 
	(`name`,`area`,`price`,`capacity`,`rent_type_id`,`img`)
values 
	("OCEAN SUITE",80,3000000,2,2,
    "https://www.furama.com/images/ibe_Superior.jpg"),
	("OCEAN STUDIO SUITE",100,5000000,3,3,
    "https://i.ytimg.com/vi/xqOofQ3r48U/maxresdefault.jpg"),
	("LAGOON SUPERIOR",150,4000000,2,3,
    "https://images.trvl-media.com/lodging/1000000/530000/526100/526011/e79873e5.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"),
	("OCEAN DELUXE",150,3000000,3,3,
    "https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-M-1047x563.jpg");
insert into `customers` 
	(`address`,`birthday`,`email`,`id_card`,`name`,`phone`,`customer_type_id`,`gender_id`)
values
	("K77/39 Lê Độ", "1994-07-30","lequocthang307@gmail.com","201693653","Lê Quốc Thắng","0764843894",1,1),
	("189 Trần Cao Vân", "1995-08-01","lenin77@gmail.com","201889653","Lê Nin","0786843894",2,2),
	("09 Nguyễn Tất Thành", "1990-01-03","anha@gmail.com","286593653","Nguyễn Thị Hà An","0768683894",2,2),
	("88 Trần Phú", "2001-02-20","nhatha@gmail.com","201695863","Ngô Thị Mỹ Hạ","0787453894",4,1),
	("K143/01 Hoàng Văn Thụ", "1996-09-01","phanthoaiphuong@gmail.com","286813653","Phan Thoại Phương","0985343894",5,1),
	("K39/32 Ngô Sỹ Liên", "2002-04-24","khanhnhien33@gmail.com","201684563","Trần Khánh Nhiên","0768685894",5,3);
insert into `employees` 
	(`birthday`,`email`,`id_card`,`name`,`phone`,`salary`,`department_id`,`education_id`,`position_id`)
values
	("1990-02-01","alexpa@yahoo.com","785698565","Alex Pam","0908337828","10000000",1,3,1),
	("1995-01-05","momonan@outlook.com","112895465","Momo Devance","0986337862","15000000",2,2,2),
	("1994-12-21","johnherry@gmail.com","567998565","John Herry","0908337828","12000000",2,1,3),
	("2001-06-06","leewoncho@email.com","785666875","Lee Won Cho","0908337828","20000000",3,1,4),
	("1995-11-30","liukan@gmail.com","223498512","Liu Kan","0908337828","25000000",3,3,5),
	("1997-05-05","wancha@yahoo.com","776568577","Lee Wan Cha","0908337828","12000000",4,4,6);
insert into `contracts` 
	(`check_in_date`,`check_out_date`,`code`,`deposit`,`payment`,`building_id`,`customer_id`,`employee_id`)
values
	("2023-10-10","2023-10-12","LQT-001",5000000,10000000,1,1,1),
	("2023-11-20","2023-11-22","LQT-002",6000000,12000000,2,2,1),
	("2023-10-22","2023-10-22","LQT-003",7000000,15000000,3,2,2),
	("2023-11-20","2023-11-30","LQT-004",5500000,11000000,7,4,2),
	("2023-11-10","2023-11-12","LQT-005",10000000,20000000,8,4,3),
	("2023-10-10","2023-10-12","LQT-006",5000000,10000000,2,3,3);
insert into `detail_services`
	(`contract_id`,`service_id`)
values
	(1,5),
    (1,4),
    (2,2),
    (3,1),
    (3,2),
    (4,3),
    (4,4),
    (4,5),
    (6,1);