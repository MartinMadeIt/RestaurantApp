[![Restaurant-App.png](https://i.postimg.cc/cLR5Cgj2/Restaurant-App.png)](https://postimg.cc/CRK461ws)

# Welcome to Restaurant Manage App

### What's the purpose ?
Restaurant Manage App is React App that visualize how to manage orders in Restaurant.


### Why I created this App ?
First version of this App was just an exercise to skill some libraries in React and to improve my React skills.
More time I spended on this exercises - more features I watnted to implement - and finally it get shape like little React project, rather than just exercise.

### Will it be release as commercial App for Restaurants ?
No. It's just a little project that is combination of simple exercises, imagination, some skills and a lot of fun. 
For now it can't be an App that stores sensitive datas like name, surname or address beacuse App "database" is just .json file. And that's not the safest way to store datas like that :)

# Usage & Installation 

## Installation 💿

1. Download project from Github repository. Check out link below to see the way to do it:
```link
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
```
2. Open downloaded file in your code editor. Now you can download all necessary packages:
    ```
    npm install
    ```


3. After that you are ready to initialize json-server :
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

When terminal ask you, just type Y to open App in port  other than 3000.

If it will get done and it won't open automatically - open link that will be shown process status (localhost:port)


5. Explore the App

## Usage 🧑🏼‍🍳

#### REMEMBER: at first launch json server has no datas !

1. Home Page - navigate through Clients Menu and Orders Menu
2. In Clients Menu You can see the Client Database (if Clients exist)
3. You can also add new Client. Note that you can't add new Client with phone number that exists in database.
4. If you have some Clients, now You can go to Orders Menu.
5. Place new order or browse for existing orders.
6. While browsing specific order you can always decide to delete this order.


# Technologies and libraries

| Technology | Description |
|------------|------------|
|[JavaScript](https://www.javascript.com/)| Main language used to make App logic|
|[CSS](https://css-tricks.com/)| Cascade Style Sheet takes care of visual site of App.|
|[React](https://pl.reactjs.org/)| Powerfull library to create Single Page App (SPA) |
|[MUI](https://mui.com/)| Material UI - design framework for React |
|[React Router DOM](https://reactrouter.com/en/main)| Library that allows to create paths to different elements and links to it. It helps to change SPA to multipage App|
|[Tanstack Query](https://tanstack.com/query/v4)| Library that was used here to prevent fetching datas every time you visit the Component|
|[Formik](https://tanstack.com/query/v4)|Used here to improve working with forms like "Add New Client Component"|
|[Yup](https://www.npmjs.com/package/yup)|Improving and facilitate form validation schema.|
|[json-server](https://www.npmjs.com/package/json-server)|It helps to change .json file to fake API, wchich now can be handled using fetch|



