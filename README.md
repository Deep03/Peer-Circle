# File Transfer Web App

This web application enables users to securely send, receive, and download files through peer-to-peer connections. It features user authentication for a personalized experience and uses MongoDB for storing user data. The backend is built with Node.js for server routing, and the frontend is developed using React.

## Features

- **User Authentication:** Secure user authentication ensures a personalized and safe environment for file transfers.

- **File Sending and Receiving:** Users can easily send files to others and receive files through peer-to-peer connections.

- **Download Functionality:** Download the received files directly from the web app.

## Technologies Used

- Node.js
- React
- MongoDB
- PeerJS (WebRTC)

## Screenshots

![Screenshot 1](screenshots/app1.png)
![Screenshot 2](screenshots/app2.png)
![Screenshot 1](screenshots/app3.png)
![Screenshot 2](screenshots/app4.png)
![Screenshot 1](screenshots/app5.png)


## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/file-transfer-web-app.git
   ```

2. **Install Dependencies:**
   ```bash
   cd file-transfer-web-app
   npm install
   ```

3. **MongoDB Configuration:**
   - Set up a MongoDB database and obtain the connection string.
   - Create a `.env` file in the root directory and add the following:
     ```env
     MONGODB_URI=your-mongodb-connection-string
     ```

4. **PeerJS Configuration:**
   - [Sign up](https://peerjs.com/) for a free API key.
   - Add your PeerJS API key to the `.env` file:
     ```env
     PEERJS_API_KEY=your-peerjs-api-key
     ```

## Usage

1. **Start the Server:**
   ```bash
   npm start
   ```

2. **Access the Web App:**
   Open your web browser and navigate to `http://localhost:3000`.

3. **User Authentication:**
   - Create a new account or log in if you already have an account.

4. **File Transfer:**
   - Use the interface to send and receive files securely.

5. **Download Files:**
   - Once a file is received, you can download it directly from the web app.

## Contributing

Feel free to contribute to the development of this project! Please follow the [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the [MIT License](LICENSE).
```

Replace the placeholder content and URLs with your actual information and image links.
