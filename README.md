# Documentation for Assignment Phase 1

This documentation outlines the data structures, REST API, and Angular architecture used for Phase 1 of the MEAN stack chat system.

---

## 1. Data Structures

In Phase 1, we use in-memory storage on the server side and local browser storage on the client side to manage chat users, groups, and channels.

### Client-Side Data Structures (Local Storage)

1. **User**
   - Stores user information including roles and groups.
   - **Fields**:
     - `username` (string): Unique identifier for a user.
     - `email` (string): User email.
     - `roles[]` (array): Roles assigned to the user (e.g., Super Admin, Group Admin, User).
     - `groups[]` (array): Groups the user belongs to.
   
2. **Group**
   - Represents a chat group with its users and channels.
   - **Fields**:
     - `groupId` (string): Unique identifier for the group.
     - `groupName` (string): Name of the group.
     - `groupAdmin` (string): User ID of the Group Admin.
     - `channels[]` (array): Channels within the group.

3. **Channel**
   - Represents chat channels within a group.
   - **Fields**:
     - `channelId` (string): Unique identifier for the channel.
     - `channelName` (string): Name of the channel.
     - `messages[]` (array): Chat history.

### Server-Side Data Structures (In-memory)
These structures are kept in-memory for Phase 1 and will be migrated to MongoDB in Phase 2.

1. **User**
   - **Fields**:
     - `id` (string): Unique identifier for the user.
     - `username` (string): Username.
     - `email` (string): User email.
     - `roles[]` (array): Roles assigned to the user.
     - `groups[]` (array): Groups the user belongs to.

2. **Group**
   - **Fields**:
     - `id` (string): Unique identifier for the group.
     - `name` (string): Group name.
     - `adminId` (string): Group Admin ID.
     - `channels[]` (array): Array of channels in the group.

3. **Channel**
   - **Fields**:
     - `id` (string): Unique identifier for the channel.
     - `name` (string): Channel name.
     - `messages[]` (array): Chat messages history.

---

## 2. REST API Documentation

The Node.js backend serves as the API layer for the chat system. It handles requests for user, group, and channel management.

### Base URL: `/api/v1/`

### Routes

1. **User Routes**
   - **`POST /users/login`**
     - **Description**: Authenticates a user by username and password.
     - **Parameters**:
       - `username` (string): User's username.
       - `password` (string): User's password.
     - **Response**: Returns user data and authentication status.

   - **`POST /users/register`**
     - **Description**: Registers a new user.
     - **Parameters**:
       - `username` (string): Unique identifier.
       - `email` (string): User email.
       - `password` (string): User password.
     - **Response**: Returns newly created user information.

2. **Group Routes**
   - **`POST /groups`**
     - **Description**: Creates a new group.
     - **Parameters**:
       - `groupName` (string): Name of the group.
       - `adminId` (string): User ID of the Group Admin.
     - **Response**: Returns created group details.

   - **`GET /groups/:groupId`**
     - **Description**: Retrieves a group by its ID.
     - **Parameters**:
       - `groupId` (string): ID of the group.
     - **Response**: Returns the group details.

3. **Channel Routes**
   - **`POST /groups/:groupId/channels`**
     - **Description**: Creates a new channel within a group.
     - **Parameters**:
       - `groupId` (string): ID of the group.
       - `channelName` (string): Name of the new channel.
     - **Response**: Returns the created channel details.

   - **`GET /groups/:groupId/channels/:channelId`**
     - **Description**: Fetches messages and details of a specific channel.
     - **Parameters**:
       - `groupId` (string): ID of the group.
       - `channelId` (string): ID of the channel.
     - **Response**: Returns channel messages and details.

---

## 3. Angular Architecture

The Angular frontend consists of several components and services to manage the chat system's user interface and business logic. 

### Components

1. **App Component (`app.component`)**
   - Root component that loads the entire Angular application.
   - Handles routing and navigation between other components.

2. **Login Component (`login.component`)**
   - Handles user login functionality.
   - Provides form input for username and password and triggers authentication API requests.

3. **Register Component (`register.component`)**
   - Facilitates user registration by interacting with the backend API to create a new user.

4. **Group List Component (`group-list.component`)**
   - Displays a list of all groups the user belongs to.
   - Fetches data using the `GroupService`.

5. **Channel List Component (`channel-list.component`)**
   - Shows a list of channels within a selected group.
   - Uses `ChannelService` to fetch and display channels.

6. **Chat Component (`chat.component`)**
   - Main chat interface where users can send and receive messages.
   - Utilizes WebSocket communication for real-time message transmission.

### Services

1. **User Service (`user.service.ts`)**
   - Handles API calls for user-related actions such as login, registration, and authentication.

2. **Group Service (`group.service.ts`)**
   - Manages CRUD operations for groups by interfacing with the backend REST API.

3. **Channel Service (`channel.service.ts`)**
   - Responsible for handling channel creation, fetching, and message transmission.

4. **Auth Guard Service (`auth-guard.service.ts`)**
   - Protects certain routes from being accessed by unauthenticated users.

### Models

1. **User Model (`user.model.ts`)**
   - Defines the structure of a user object.

2. **Group Model (`group.model.ts`)**
   - Represents the group entity used throughout the app.

3. **Channel Model (`channel.model.ts`)**
   - Defines the structure for channel data.

### Routes

- **`/login`**: Loads the login page.
- **`/register`**: Loads the registration page.
- **`/groups`**: Displays the groups the user is part of.
- **`/groups/:groupId/channels`**: Displays channels for a selected group.
- **`/groups/:groupId/channels/:channelId/chat`**: Displays the chat interface for the selected channel.

---

This documentation covers the key aspects of the architecture and data handling for Phase 1 of the MEAN stack chat system project. Phase 2 will introduce MongoDB, Sockets, Image, and Video support, which will expand the architecture further.
