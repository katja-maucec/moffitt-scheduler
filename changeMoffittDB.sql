psql postgres
drop database moffitt;
create database moffitt;
\q
psql moffitt < moffitt.sql

delete from availability;

--create schedule table
CREATE TABLE schedule (
    sle_id INTEGER,
    day_of_week CHARACTER VARYING(30) ,
    location CHARACTER VARYING(30) ,
    start_time DOUBLE PRECISION,
    end_time DOUBLE PRECISION,
    coverrequested BOOLEAN
);

-- insert the following avails from availabilites.js into the availability table


INSERT INTO availability (
    availability_id,
    sle_id,
    start_time,
    day_of_week
)
VALUES
    (1, 1, 13, 0),
    (2, 1, 13.5, 0),
    (3, 1, 14, 0),
    (4, 1, 14.5, 0),

    (5, 2, 13, 0),
    (6, 2, 13.5, 0),
    (7, 2, 14, 0),
    (8, 2, 14.5, 0),
    (9, 2, 15, 0),
    (10, 2, 15.5, 0),
    (11, 2, 16, 0),
    (12, 2, 16.5, 0),

    (13, 3, 14, 0),
    (14, 3, 14.5, 0),
    (15, 3, 15, 0),
    (16, 3, 15.5, 0),
    (17, 3, 16, 0),  
    (18, 3, 16.5, 0),

    (19, 3, 9, 1),
    (20, 3, 9.5, 1),
    (21, 3, 10, 1),
    (22, 3, 10.5, 1),
    (23, 3, 11, 1),   
    (24, 3, 11.5, 1),
    (25, 3, 12, 1),
    (26, 3, 12.5, 1),
    (27, 3, 13, 1),   
    (28, 3, 13.5, 1),

    (29, 4, 14, 0),
    (30, 4, 14.5, 0),
    (31, 4, 15, 0),
    (32, 4, 15.5, 0),
    (33, 4, 16, 0),   
    (34, 4, 16.5, 0),    

    (35, 4, 9, 1),
    (36, 4, 9.5, 1),
    (37, 4, 10, 1),
    (38, 4, 10.5, 1),
    (39, 4, 11, 1),   
    (40, 4, 11.5, 1),
    (41, 4, 12, 1),
    (42, 4, 12.5, 1),
    (43, 4, 13, 1),   
    (44, 4, 13.5, 1),

    (45, 5, 14, 0),
    (46, 5, 14.5, 0),
    (47, 5, 15, 0),
    (48, 5, 15.5, 0),
    (49, 5, 16, 0),   
    (50, 5, 16.5, 0),  

    (51, 5, 9, 1),
    (52, 5, 9.5, 1),
    (53, 5, 10, 1),
    (54, 5, 10.5, 1),
    (55, 5, 11, 1),   
    (56, 5, 11.5, 1),
    (57, 5, 12, 1),
    (58, 5, 12.5, 1),
    (59, 5, 13, 1),  
    (60, 5, 13.5, 1),

    (61, 6, 14, 0),
    (62, 6, 14.5, 0),
    (63, 6, 15, 0),
    (64, 6, 15.5, 0),
    (65, 6, 16, 0),   
    (66, 6, 16.5, 0),  

    (67, 6, 9, 1),
    (68, 6, 9.5, 1),
    (69, 6, 10, 1),
    (70, 6, 10.5, 1),
    (71, 6, 11, 1),   
    (72, 6, 11.5, 1),
    (73, 6, 12, 1),
    (74, 6, 12.5, 1),
    (75, 6, 13, 1),   
    (76, 6, 13.5, 1),

    (77, 7, 14, 0),
    (78, 7, 14.5, 0),
    (79, 7, 15, 0),
    (80, 7, 15.5, 0),
    (81, 7, 16, 0),  
    (82, 7, 16.5, 0),

    (83, 7, 9, 1),
    (84, 7, 9.5, 1),
    (85, 7, 10, 1),
    (86, 7, 10.5, 1),
    (87, 7, 11, 1),   
    (88, 7, 11.5, 1),
    (89, 7, 12, 1),
    (90, 7, 12.5, 1),
    (91, 7, 13, 1),   
    (92, 7, 13.5, 1)


/** This query tests that master schedule correctly displays shifts within the current week. */
INSERT INTO shifts (
    sle_id, location, start_time, end_time
)
VALUES 
    (1, 'Moffitt', '2020-04-21 10:00:00', '2020-04-21 12:00:00'),
    (2, 'Moffitt', '2020-04-24 05:00:00', '2020-04-24 09:00:00'),
    (2, 'Doe', '2020-04-23 16:00:00', '2020-04-23 17:30:00'),
    (1, 'Moffitt', '2020-04-18 22:00:00', '2020-04-19 02:00:00'),
    (3, 'Doe', '2020-04-25 21:00:00', '2020-04-26 01:00:00'),
    (3, 'Doe', '2020-04-22 20:00:00', '2020-04-23 00:00:00'), 
    (1, 'Doe', '2020-04-23 23:00:00', '2020-04-24 03:00:00');