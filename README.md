##

This project consists of a back-end API built with Node.js, Express, and MongoDB, and a front-end that interacts with the API to manage items. Users can create, read, update, and delete items through the app.


##  The front-end application allows users to perform the following actions: ##

**View a list of items**

**Add a new item by providing a name and description**

**Update an existing item by editing its details**

**Delete an item**


## API Interaction  ##

The front-end communicates with the back-end API at http://localhost:5000/api/items. The following API endpoints are used:

**POST** `/api/items` - Create a new item**

**GET** `/api/items` - Retrieve all items**

**GET** `/api/items/:id` - Retrieve a specific item by its ID

**GET** `/api/items/postId/:postId` - Retrieve a specific item by its postId

**PUT** `/api/items/:id` - Update an item by its ID**

**PUT** `/api/items/postId/:postId` - Update an item by its postId

**DELETE** `/api/items/:id` - Delete an item by its ID

## Deployed sites 

For Back End:  https://mern-app-8dn1.onrender.com

For Front End: https://frontendapp-y8nx.onrender.com/