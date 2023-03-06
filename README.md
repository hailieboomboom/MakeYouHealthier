<h1 align = "center"> Make You Healthier</h1>

## Program Requirement
- NodeJS. We will use NodeJS as our web server which you can get it from [Here](https://nodejs.org/en/) (LTS version preferred)
- MySQL is our database. You can get it from [Here](https://dev.mysql.com/downloads/mysql/)
- (Optional) For Windows users, you can install terminal like Mac or Linux user. You can select one of these from [Here](https://www.puttygen.com/windows-terminal-emulators). If you don't want to install terminal, you can use PowerShell on Windows. 

# How to run the website

## 1. Install NodeJS
For Windows users: [Here](https://phoenixnap.com/kb/install-node-js-npm-on-windows) </br>
For Mac users: [Here](https://www.webucator.com/article/how-to-install-nodejs-on-a-mac/)

## 2. Install Database and Add Data to Database
When you install database make sure that you install **MySQL Server** and **MySQL Workbence** and note down your database information because you need it later.

Once you finish install the database, open MySQL Workbence and click add button.
![1](https://github.com/hailieboomboom/MakeYouHealthier/blob/main/installation-img/1.jpg)

For information here we use `Standard TCP/IP` as a connection method `Hostname` 127.0.0.1, `port` 3306 and `Username` is what you set during database installation.
![2](https://github.com/hailieboomboom/MakeYouHealthier/blob/main/installation-img/3.jpg)

When you connect to db, it will ask you the password that you fill during database installation step.

Then add a new database and run 3 SQL files in `SQL` folder.
Once finish make sure you have 3 tables like this:
![3](https://github.com/hailieboomboom/MakeYouHealthier/blob/main/installation-img/2.jpg)

## 3. Install and Configure the server
Download this Git repo and extract the zip file wherever you want. Next, open terminal/PowerShell and go to the folder that you just extracted the zip file. Then run the following command:

> npm install

After you run this command, you'll have folder structure like this.

![4](https://github.com/hailieboomboom/MakeYouHealthier/blob/main/installation-img/4.jpg)

Next, open you `.env.sample` with any text editor such as notepad.  You'll see information below:

> DB_HOST=localhost
> 
> DB_USER=root
> 
> DB_PASS=password
> 
> DB_DATABASE=healthier
> 
> PORT=3000
> 
> MAPBOX_API=pk.xxxxxxxxxxxxxxxxxxxxxxxxxxxx

Edit your database information. For `HOST` leave it as **localhost**. For `PORT`, you can leave it as 3000. For `MAPBOX_API`, you can get it from [here](https://www.mapbox.com/).
After you finish, save the file and rename it to `.env` (No any precede text only .env)

## 4. Run the server
After you've done steps above, run the following command in your terminal/PowerShell to start your server.
> node app.js

You should see a message "Server start at port 3000" on your termianl/PowerShell. You can access the website in your browser with url <a href="http://localhost:3000/" target="_blank">localhost:3000</a>.

Enjoy :)

![5](https://github.com/hailieboomboom/MakeYouHealthier/blob/main/installation-img/5.jpg)
