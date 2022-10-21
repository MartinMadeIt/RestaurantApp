# Restaurant Manage App

### What's the purpose ?
Restaurant Manage App is React App that visualize how to manage orders in Restaurant.


### Why I created this App ?
First version of this App was just an exercise to skill some libraries in React and to improve my React skills.
More time I spended on this exercises - more features I watnted to implement - and finally it get shape like little React project, rather than just exercise.

### Will it be release as commercial App for Restaurants ?
No. It's just a little project that is combination of simple exercise, imagination, some skills and a lot of fun. 
First of all, one of original purposes to to this App was to skill libraries like json-server. "Database" of this App 
is simple .json file and json-server on localhost so it can't be a commercial App that manage sensitive datas.

The App won't be an App that is used in Restaurants but feel free to download it for your child and tell them to manage their Restaurant the best that they can :)


# Usage & Installation 

## Installation 

1. Download project from Github repository. Check out link below to see the way to do it:
```link
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
```
2. Open downloaded file in your code editor. Now you can download all neccesery packages. Depends on what software you're using - you have to 
take different steps.

    If you're using npm CLI, paste a command in terminal:
    ```
    npm install
    ```


3. After installing all of neccesery packages you are ready to initialize json-server :
```
 json-server --watch db.json
```

If you are using npm and it doesn't work try :
```
npx json-server --watch db.json
```

!! Remember to start json-server on **localhost:3000** 

4. After this you can open another terminal window. Chceck if you are in correct place (you should be in project RestaurantApp). If you're not :
```
cd ReastaurantApp
```
If you are in RestauranApp just type : 
```
npm start 
```

Terminal will ask you if you want to open project in localhost port other than 3000. Type y and wait till the process get done.

If it will get done and it won't open automatically - open link that will be shown process status (localhost:port) by clicking 
- ctrl + left click on Windows
- command + click on Mac


5. Explore the App



