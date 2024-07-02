# View Online

<b>Please Notice That the Project Is In Development Mode, So The Link Below Is Not Contain The Latest Features.
To Explore The Features, Please Follow The Installation Steps.</b>

you can view the project online on this <a href="https://school-webpage-mu.vercel.app/">link</a>.

# Installation

<b>Before start to installation, you must have installed Node.js and MongoDB on your system.</b>

1. At first, you need to clone the project on your system, using the command below:
    ```bash
   git clone https://github.com/AliDeWeb/School_Webpage.git
   ```
2. To start server, at first select backend directory using the command below:
    ```bash
   cd School_Webpage/backend
   ```
3. In the next step, you need to install dependencies using the command below:
    ```bash
   npm install
   ```
4. Now it's time to build the project, run command below:
   ```bash
   npm run start-ts
   ```
5. Finally, the last step, just run the command below to see the power of Node.js :)
   ```bash
   npm start
   ```
6. When you have done all the steps above, let's start to run frontend, for that select frontend directory using the
   command bellow:
   ```bash
   cd School_Webpage/frontend
   ```
7. Now let's install the dependencies:
    ```bash
   npm install
   ```
8. Finally, the last step, run the React app using the command below:
    ```bash
   npm run dev
   ```

   Congratulations ;)

# Configs.env

create a file and name it <b>configs.env</b>.
add these codes to it:

   ```dotenv
    PORT=3000
    DATABASE=mongodb://127.0.0.1:27017/Test
    NODE_ENV=development
    JWT_SECRET=123456789
    JWT_EXPIRES_IN=1d
    MAX_REQUESTS_LIMIT_TIME=10
   ```

<b>Make sure to change all the values for more security.</b>