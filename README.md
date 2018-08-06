# Chore Tracker README

Sign up with your email to get started, then sign in. Once signed in, you will be able to view all of your chores, create new chores, deleted unwanted chores, and update old chores. 

## Project Idea

```md
Chore-Tracker is an app for to keep track of a family's or group's chores. I came up with it thinking about my own family and how we go about handling and distributing chores. Although there are already similar apps available, I believe I will be able to come up with some nuanced features and ux design.

Technologies used:
HTML
CSS
JavaScript
jQuery
Ruby on Rails
Heroku
GitHub
CLI
VS Code
SQL/PostgreSQL

Plans for Future Iterations:
CSS Styling. Perhaps changing the Add Chore user interface to have users directly enter the new chore attributes in a new blank row on the table. Also need to consider have an auth account functionality so that admin could assign and view chore for everyone in the group. This could involve incorporating a new database. 

Process:
Chore-Tracker is the second app that I have created, and the first where I created the backend.


I began the project by completing the full-stack-practice, including wireframs, user stories, and general project planning tasks. I then went through the API setup. This included downloading the rails API template and generating a scaffold with my databases, routes, controller, and models. Finally, I signed up for an account with Heroku which I would ultimately use to deploy my backend. Before moving on, I ensure the database was working through the use of Postman.

Once I was finished making changes to the rails-generated scaffold, I began working on the front end. This also involved use a browser template. Similar to my first project, Tic Tac Toe, I first created the user authorization functionality and ensured that was working. After this, I began working on viewing all chores and having them generate in a table through DOM manipulation. Since I had not created my board dynamically when I wrote Tic Tac Toe, this experience was new for me. I initially tried to use HTML tables, but they had trouble fitting with my desired update feature. I ultimately decided to go with CSS display properties for the table, rows, and cells. This allowed me to have a columns for the update and delete buttons to function the way they do (making the table row editable and saveable). The delete button was fairly simple in comparison.

Ultimately, this project was more difficult than Tic Tac Toe because it involved creating a backend in addition to the frontend, but I feel my mental approach was more ready to encounter and overcome difficulty. I look forward to updating this app.
```

## User Stories

```md
As a user, I want to be able to sign up for an account.

As a user, I want to be able to sign in using my username and password.

As a user, I want to be able to sign out of my account.

As a user, I want to be able to change my password.

As a user, I want to be able to join a group/family.

As a user, I want to be able to create a new chore.

As a user, I want to see which chores I have been assigned(by the admin).

As a user, I want to provide the name of the chore.

As a user, I want to enter the estimated time to complete the chore.

As a user, I want to input whether the chore is finished.

As a user, I want to input the frequency with which the chore needs to be completed.

As a user, I want to update and/or check when the chore was last completed.

As an admin, I want to create a new group/family.
 
As an admin, I want to assign a user to complete that chore.

As an admin, I want to view all chores and asscoriated data belonging to my group/family.

```

## Database Organization

```md
I have a Users table that will include an id, name, and age. I also have a Chores table that will include an id, user id, name(of the chore), estimated time to complete, is finished?, frequency(i.e. needs to be completed every x number of days), and the date the chore was last completed.
```

## ERD

![alt text](https://i.imgur.com/fQHRsXwl.jpg)


## Routing

```md
GET, POST, PATCH, DELETE, INDEX, SHOW
```

## 3rd Party APIs

```md
Not at this time.
```

## Wireframes

Please create a wireframe of your planned front end.

![alt text](https://i.imgur.com/Xmqv7P2l.jpg)
![alt text](https://i.imgur.com/isWJpapl.jpg)


## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.

```md
Day 1 - Planning (User Stories, Wireframes, & ERD)
Day 2 - API setup & Client setup (templates and deploying)
Day 3 - API Side 
 Review rails-api-one-to-many or rails-api-many-to-many
 Scaffold your resource
 Test your resource's end points with curl scripts
 Update resource controller to inherit from Protected or OpenRead controller
 Test your resource's end points with curl scripts
 Add the relationship to a User
 Add User ownership to resource controller
Day 4 - Client Side (part 1)
 Review api-token-auth
 Sign Up (curl then web app)
 Sign In (curl then web app)
 Change Password (curl then web app)
 Sign Out (curl then web page)
 All API calls have success or failure messages
Day 5 - Client Side (part 2)
 Review query-ajax-post
 Create resource (curl then web app)
 Get all of their owned resources (curl then web app)
 Delete single resource (curl then web app)
 Update single resource (curl then web app)
Day 6 - Final Touches
 README
 Troubleshoot/Debug
 Style
```
