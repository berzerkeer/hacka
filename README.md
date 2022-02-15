Code Submission Guidelines

1. You have 5 days to implement the solution.
2. We are interested in how you design & structure your code, object-oriented or functional design and schema design.
3. We're also interested in understanding how you make assumptions when building software.
4. Your solution must have unit-tests. Extra points if you can follow TDD while building your solution.
5. Please use Git for version control and add frequent commits. This will help us understand how you build the solution.
6. You don't need to push your solution to Github/Bitbucket, send us a zip or tarball of your source code. Don't forget to include the .git folder.
7. Please do not check-in any binaries, build files etc.
8. Please provide a README file with your solution with instructions to setup/build/run the solution. Extra points if you can provide a Dockerfile.

Problem Statement:
Build a web application which lets employees of an organisation to add/manage challenges for internal hackathons which they organise every month. Let's call this application Hack Ideas.
The application should have these features,

- Allow users to enter into application with 'employee id'(password is not necessary).
- Allow users to add a new challenges/ideas.
- A challenge will have a title, description and tags
- You can maintain fixed pre-defined tags (like 'feature', 'tech' etc.)
- Users can upvote a challenge
- Show the list of all challenges on home page
- Allow users to sort challenges with votes count, creation date

Notes:

- You need to build the frontend application.
- Data can be stored in browser storage or you can use cloud DB like firebase or you can implement RESTful JSON API.
- You can write the frontend in any Javascript framework of your choice.
- You can use any popular CSS frameworks like Bootstrap/Materialize for the UI.
- Try to keep the use of external libraries/packages to a minimum.
