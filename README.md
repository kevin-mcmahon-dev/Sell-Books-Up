# SellBooksUP

Kevin, Zach P, and CB Project One

## Index:

-Scope 
-User Stories
-Technologies
-Approach
-Milestones
-Wireframe

## Scope
sellBooksUp is an e-commerce bookstore that displays a full catalog of books, show pages for individual titles, options for customers to join as a user of the website and to leave reviews of books with textual description and star ratings. Utilizing the web store while logged in as an Admin account user, one is able to add new books to the catalog, edit books in the catalog, and delete books from the catalog. 

## User Stories
As a user I want to browse books:
User begins at /home and chooses a book tile show page link from one of the
New Arrivals, Best Sellers, or Staff Picks displayed.
After clicking book tile user is routed to /home/all-books/:id show page of that book

As a user I want to review a book:
User begins at /home and chooses a book tile show page link from one of the
New Arrivals, Best Sellers, or Staff Picks displayed.
After clicking book tile user is routed to /home/all-books/:id show page of that book
OR
User begins at /home and chooses link for /home/all-books ‘all books
User is routed to /home/all-books
User clicks on book tile of choice and is routed to /home/all-books/:id
At show page for book user uses Form and clicks submit button
/home/all-books/:id is re-rendered with updated review (if no error)
If error, user is prompted to correctly and completely fill out review form 

As a user I want to create an account:
User begins at /home and chooses link for /home/new-user
User is routed to /home/new-user
User fills out form with username and password and clicks submit button
If no errors user is routed to /home/login
If error, user is prompted to correctly and completely fill out form 

As a user I want to log in to my account:
User begins at /home and clicks link for /home/login ‘login’ in nav
User is routed to /home/login
User clicks on user tile relating to their account
User is routed to /home/login/:id

## Technologies 
JavaScript, EJS, HTML, CSS, Bootstrap, GitHub, Git, Node Express, MongoDB, MongoAtlasDB, Mongoose, Heroku, BBImg. 

## Approach
First things first. Starting with verbalizing our concept, we made comprehensive session notes, bulleted lists on how to meet core requirements for the project, as well as stretch features and styling we considered essential. Constant collaboration was key and decided as a rule from early on in the project. As a team we created wireframes, a master user flow map, and some inspirational references for styling. With our preparations complete we set a goal of meeting the MVP by a certain time and day and a priority of stretch features in which we would attempt to complete.

Since we had been working as a team from the beginning we decided to over-communicate throughout each day. One example: This included all team members providing oversight while any one of us would pull and merge to the development branch, only after checking in with the others that the code we were adding was not only functional but what we had agreed to as a team. 

## Milestones
Working as a team to achieve the same goal throughout each day proved to be a very rewarding challenge. Committing to over-communicating was key, and that prevented a lot of potential errors or misfired steps. 

## Wireframes









![Home](https://user-images.githubusercontent.com/86076600/137515791-78ebbc80-b0e5-47f8-8ce1-77c599ff31e0.png)
![:all-books](https://user-images.githubusercontent.com/86076600/137515900-c5d7ebf9-5f18-4cd3-9969-a70c6c0bca7e.png)
![bookShowPage](https://user-images.githubusercontent.com/86076600/137518774-668523a1-5eb8-4799-aa7f-6ce509093893.png)

![login](https://user-images.githubusercontent.com/86076600/137520581-df55e139-403f-4b69-97b4-b5bbd54c49ae.png)
![login-id](https://user-images.githubusercontent.com/86076600/137520633-ecb3a49c-bd9d-49ad-9c3f-310c47bcf084.png)
![login:id:checkout](https://user-images.githubusercontent.com/86076600/137520683-b4aedee3-c2ba-4123-9366-5432a5f0b0f5.png)
![allbooks:id:edit](https://user-images.githubusercontent.com/86076600/137520731-d2d6ff52-dfd2-4c57-b518-dc31e1eb5577.png)
![login:id:newbook](https://user-images.githubusercontent.com/86076600/137520796-55553bfd-8e02-4cc2-bc69-57a19285a6a9.png)
![newuser](https://user-images.githubusercontent.com/86076600/137520863-74cc82e7-6a1b-4331-9b6b-ccfeb419059c.png)
![ERD](https://user-images.githubusercontent.com/86076600/137520941-9d273924-6111-4eb6-9fe6-c02b8df0e97d.png)
