# Dawproject

# Please change configuration for your database in settings.py
     by defualt database is set to postgresql USERNAME='postgres' PASSWORD = '1234'
# Please run this command to install the packages used in this project 
     pip install django djangorestframework django-cors-headers psycopg2-binary rest_framework_simplejwt


# first migrate the modles to the database then insert the following insert statement 

  insert into "Quiz_questionnaire" ("questionnaireName", "dateOfTheQuestionnaire") VALUES ('Test Questionnaire','2023-12-23 11:31:16.649999+01');




 INSERT INTO Quiz_question (id, questionText, questionType, id_Questionnaire_id) VALUES

(1, 'Gender: Personal information', 1, 1),

(2, 'Age: Personal information', 1, 1),

(3, 'Marital Status: Personal information', 1, 1),

(4, 'Level of education: Personal information', 1, 1),

(5, 'Employment status: Personal information', 1, 1),

(6, 'Annual Income: Video Game Addiction Assessment', 1, 1),

(7, 'How often do you play video games? Video Game Addiction Assessment', 1, 1),

(8, 'How important were video games to you compared to other activities? Video Game Addiction Assessment', 1, 1),

(9, 'What is the impact of video games on your social relationships? Video Game Addiction Assessment', 1, 1),

(10, 'Have you ever lied about playing video games? Video Game Addiction Assessment', 1, 1),

(11, 'How do you react when you cannot play video games? Video Game Addiction Assessment', 1, 1),

(12, 'Have you ever felt a growing need to play to get the same sense of pleasure or excitement? Video Game Addiction Assessment', 1, 1),

(13, 'How do video games affect your sleep? Video Game Addiction Assessment', 1, 1),

(14, 'Have you ever neglected work or school responsibilities because of video games? Video Game Addiction Assessment', 1, 1),

(15, 'Have you tried to reduce your playing time without success? Video Game Addiction Assessment', 1, 1),

(16, 'How do you feel when you are not playing video games for a long time? Video Game Addiction Assessment', 1, 1),

(17, 'Have you ever borrowed money to buy video games or game-related content? Video Game Addiction Assessment', 1, 1),

(18, 'How would you describe your level of concentration while playing video games? Video Game Addiction Assessment', 1, 1),

(19, 'Have you ever experienced physical symptoms due to prolonged play? Video Game Addiction Assessment', 1, 1),

(20, 'Have video games had a negative impact on your productivity at work or school? Video Game Addiction Assessment', 1, 1),

(21, 'How many times have you neglected important activities to play video games? Video Game Addiction Assessment', 1, 1),

(22, 'Have you ever had conflicts with friends or family because of your time playing video games? Video Game Addiction Assessment', 1, 1),

(23, 'What is your emotional state after playing video games for long periods of time? Video Game Addiction Assessment', 1, 1),

(24, 'Have you ever missed social events to play video games? Video Game Addiction Assessment', 1, 1),

(25, 'Have you developed specific routines or rituals before or during the video game? Video Game Addiction Assessment', 1, 1),

(26, 'Do you feel the constant need to check for updates or new game-related content? Video Game Addiction Assessment', 1, 1),

(27, 'How much time a day do you spend thinking about video games when you’re not playing? Video Game Addiction Assessment', 1, 1),

(28, 'Have you ever hidden or minimized the amount of time you spend playing video games to your loved ones? Video Game Addiction Assessment', 1, 1),

(29, 'Do you often feel guilty after playing video games for a long time? Video Game Addiction Assessment', 1, 1),

(30, 'Have you ever missed personal or professional engagements due to extended gaming sessions? Video Game Addiction Assessment', 1, 1),

(31, 'Have you had memory or concentration problems outside of the game after an extended game session? Video Game Addiction Assessment', 1, 1),

(32, 'Have video games had a negative impact on your love life? Video Game Addiction Assessment', 1, 1),

(33, 'Have you ever sacrificed physical activities or sports to play video games? Video Game Addiction Assessment', 1, 1),

(34, 'Do you feel the need to play video games to escape problems or negative feelings? Video Game Addiction Assessment', 1, 1),

(35, 'Have you ever experienced significant mood swings when you couldn’t play video games? Video Game Addiction Assessment', 1, 1),

(36, 'How would you rate your level of addiction or emotional attachment to video games? Video Game Addiction Assessment', 1, 1);


 INSERT INTO "Quiz_option" (id, "optionText", point, "id_Question_id") VALUES

(1, 'Male', 0.00, 1),

(2, 'Female', 0.25, 1),

(3, 'Under 18 years', 0.00, 2),

(4, '18-25 years', 0.25, 2),

(5, '26-35 years', 0.50, 2),

(6, '36-45 years', 0.75, 2),

(7, '46-55 years', 1.00, 2),

(8, '56 years and over', 1.25, 2),

(9, 'Single', 0.00, 3),

(10, 'Married', 0.25, 3),

(11, 'Divorced', 0.50, 3),

(12, 'Widower/Widow', 0.75, 3),

(13, 'Primary education', 0.00, 4),

(14, 'Secondary education', 0.25, 4),

(15, 'Graduate Studies (Baccalaureate, Bachelor, Master)', 0.50, 4),

(16, 'Postdoctoral Studies (PhD)', 0.75, 4),

(17, 'Student', 0.00, 5),

(18, 'Full-time employee', 0.25, 5),

(19, 'Part-time employee', 0.50, 5),

(20, 'Independent/Contractor', 0.75, 5),

(21, 'Unemployed', 1.00, 5),

(22, 'Retired', 1.25, 5),

(23, 'Less than 10,000 DA', 0.00, 6),

(24, '10,000 DA - 30,000 DA', 0.25, 6),

(25, '30,000 DA - 60,000 DA', 0.50, 6),

(26, '60,000 DA - 90,000 DA', 0.75, 6),

(27, 'Over 90,000 DA', 1.00, 6),

(28, 'Less than 1 hour per day', 0.00, 7),

(29, '1 to 2 hours per day', 0.25, 7),

(30, '2 to 4 hours per day', 0.50, 7),

(31, 'More than 4 hours per day', 0.75, 7),

(32, 'Less important', 0.00, 8),

(33, 'As important', 0.25, 8),

(34, 'Larger', 0.50, 8),

(35, 'No impact', 0.00, 9),

(36, 'Slight alteration (less contact)', 0.25, 9),

(37, 'Significant impact (neglected relationships)', 0.50, 9),

(38, 'Never', 0.00, 10),

(39, 'Rarely', 0.25, 10),

(40, 'Sometimes', 0.50, 10),

(41, 'Frequently', 0.75, 10),

(42, 'No particular reaction', 0.00, 11),

(43, 'Slight disappointment', 0.25, 11),

(44, 'Slight disappointment', 0.25, 11),

(45, 'Irritability or frustration', 0.50, 11),

(46, 'Urgent need to play', 0.75, 11),

(47, 'No, never', 0.00, 12),

(48, 'Rarely', 0.25, 12),

(49, 'Sometimes', 0.50, 12),

(50, 'Frequently', 0.75, 12),

(51, 'No impact', 0.00, 13),

(52, 'Slight disruption', 0.25, 13),

(53, 'Occasional insomnia', 0.50, 13),

(54, 'Frequent insomnia', 0.75, 13),

(55, 'Never', 0.00, 14),

(56, 'Rarely', 0.25, 14),

(57, 'Sometimes', 0.50, 14),

(58, 'Frequently', 0.75, 14),

(59, 'Yes, successfully', 0.00, 15),

(60, 'Yes, but unsuccessful', 0.25, 15),

(61, 'No, I haven’t tried', 0.50, 15),

(62, 'Indifferent', 0.00, 16),

(63, 'Mild Annoyance', 0.25, 16),

(64, 'Irritability or restlessness', 0.50, 16),

(65, 'Depression or anxiety', 0.75, 16),

(66, 'Never', 0.00, 17),

(67, 'Rarely', 0.25, 17),

(68, 'Sometimes', 0.50, 17),

(69, 'Frequently', 0.75, 17),

(70, 'Excellent', 0.00, 18),

(71, 'Good', 0.25, 18),

(72, 'Average', 0.50, 18),

(73, 'Low', 0.75, 18),

(74, 'Never', 0.00, 19),

(75, 'Rarely', 0.25, 19),

(76, 'Sometimes', 0.50, 19),

(77, 'Frequently', 0.75, 19),

(78, 'No impact', 0.00, 20),

(79, 'Slight impact', 0.25, 20),

(80, 'Moderate impact', 0.50, 20),

(81, 'Significant impact', 0.75, 20),

(82, 'Never', 0.00, 21),

(83, 'Rarely', 0.25, 21),

(84, 'Sometimes', 0.50, 21),

(85, 'Frequently', 0.75, 21),

(86, 'Never', 0.00, 22),

(87, 'Rarely', 0.25, 22),

(88, 'Sometimes', 0.50, 22),

(89, 'Frequently', 0.75, 22),

(90, 'Energized and happy', 0.00, 23),

(91, 'Tired but satisfied', 0.25, 23),

(92, 'Irritated or depressed', 0.50, 23),

(93, 'Anxious or stressed', 0.75, 23),

(94, 'Never', 0.00, 24),

(95, 'Rarely', 0.25, 24),

(96, 'Sometimes', 0.50, 24),

(97, 'Frequently', 0.75, 24),

(98, 'Never', 0.00, 25),

(99, 'Rarely', 0.25, 25),

(100, 'Sometimes', 0.50, 25),

(101, 'Frequently', 0.75, 25),

(102, 'Never', 0.00, 26),

(103, 'Rarely', 0.25, 26),

(104, 'Sometimes', 0.50, 26),

(105, 'Frequently', 0.75, 26),

(106, 'Almost never', 0.00, 27),

(107, 'Less than 1 hour', 0.25, 27),

(108, '1 to 2 hours', 0.50, 27),

(109, 'More than 2 hours', 0.75, 27),

(110, 'Never', 0.00, 28),

(111, 'Rarely', 0.25, 28),

(112, 'Sometimes', 0.50, 28),

(113, 'Frequently', 0.75, 28),

(114, 'Never', 0.00, 29),

(115, 'Rarely', 0.25, 29),

(116, 'Sometimes', 0.50, 29),

(117, 'Frequently', 0.75, 29),

(118, 'Never', 0.00, 30),

(119, 'Rarely', 0.25, 30),

(120, 'Sometimes', 0.50, 30),

(121, 'Frequently', 0.75, 30),

(122, 'Never', 0.00, 31),

(123, 'Rarely', 0.25, 31),

(124, 'Sometimes', 0.50, 31),

(125, 'Frequently', 0.75, 31),

(126, 'No impact', 0.00, 32),

(127, 'Slight impact', 0.25, 32),

(128, 'Moderate impact', 0.50, 32),

(129, 'Significant impact', 0.75, 32),

(130, 'Never', 0.00, 33),

(131, 'Rarely', 0.25, 33),

(132, 'Sometimes', 0.50, 33),

(133, 'Frequently', 0.75, 33),

(134, 'Never', 0.00, 34),

(135, 'Rarely', 0.25, 34),

(136, 'Sometimes', 0.50, 34),

(137, 'Frequently', 0.75, 34),

(138, 'Never', 0.00, 35),

(139, 'Rarely', 0.25, 35),

(140, 'Sometimes', 0.50, 35),

(141, 'Frequently', 0.75, 35),

(142, 'Weak', 0.00, 36),

(143, 'Moderate', 0.25, 36),

(144, 'High', 0.50, 36),

(145, 'Very high', 0.75, 36);




