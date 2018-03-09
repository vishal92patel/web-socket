<code>**For lasted update visit** [**https://github.com/vishal92patel/web-socket**](https://github.com/vishal92patel/web-socket)</code>

This is a **real time application** , demonstrate you that how **two way (bidirectional) communication** happened using **websocket** technology, as http protocol can handle only single way (single TCP connection) communication.

#### This project is divided in to 3 parts/projects to understand.

(1) Frontend.

(2) Messaging.

(3) Webservice.

<hr/>

**What each project contains?**

(1) **Frontend** is part where all UI related things are there.

<code>Technology used in: - **Angular5, Socket-Client.**</code>

(2) **Messaging** act as an intermediate between Frontend and Webservice.

<code>Technology used in: - **Node.Js, Express.Js, and Socket.io**</code>

(3) **Webservice** , Is simple REST APIs.

<code> Technology used in: - **PHP, MySQL and Apache2.**</code>

![Image of Architecture](https://raw.githubusercontent.com/vishal92patel/web-socket/master/documents/Capture.PNG)

<hr/>

#### What you can lean in this project:-

Note: Whole communication is happened using websocket only, No were HTTP protocol is used.

**Base**

- Angular reactive form validation.
- Validation on Image by Size, Extension, and MIME Type (Advanced).
- Ng-Routes.
- Ngrx-Bootstrap.
- Event-Emitter.
- Subscriber.
- Observable.
- Angular Service.
- Modular components.
- Ng-Pipe.
- Router-Guards.
- Resolving Routes.
- Directives.

**Main Features**

- User login.
- Signup.
- Manage session.
- Keep user logged in automatically.
- Check real time user status, whether user is online, offline and last seen.
- One on one Chat. (Upcoming).
- Group chat. (Upcoming).

<hr>

#### How to run this project: - (steps 3)

1. **What things are required before going to setup:-**

- Node &lt;= 6.11
- Angular CLI
- XAMPP/LAMPP (Included PHP, MySQL, phpMyAdmin, and Apache2) **(Recommend).**

**OR**

- PHP &lt;= 6 (web service written with POD connection).
- MySQL &lt;= 5.
- Apache2.



2. **How to setup:-**

- Just copy and paste **2 projects (Frontend and Messaging)** as it is in one directory (You can keep separate directory, if you want).
- Open terminal -&gt; cd to Frontend directory -&gt; **npm install**
- Open terminal -&gt; cd to Messaging directory -&gt; **npm install**

You&#39;re Frontend and Messaging is ready to run, Hold on there is one more project is left to setup.

- Now **host your Webservice**
Steps for XAMPP installed.
	- Open &quot; **XAMPP Control Panel**&quot; (With Admin Rights) and Start Apache and MySQL service and after that it will converted in green color if everything is normal.
  - Navigate to XAMPP installed directory (By default C:\xampp\htdocs)
  - And paste as it is in side htdocs. (you can create folder inside)
  - Inside project, you will find **&quot;websocket.sql&quot;** file that is database file to create schema in MySQL.
  - To import, open browser and hit this url **(localhost/phpmyadmin)** And create one database and import inside that DB.

3. **How to run:-**

- **Checking the configuration**
  - Open Frontend/src/app/ services/ web-socket/web-socket.service.ts And find **private url = &#39;http://localhost:3000&#39;;** Make sure this is your Messaging url address, Is same as this if not then change it.
  - Open Messaging/app.js And find **var apiUrl = &quot;http://localhost/websocket\_apis&quot;;** Make sure this is your hosted webservice url address, If not then change it.

- **Run your project**
  - Open terminal cd to Frontend -&gt; ng serve 
  You can build prod version also and host that. (Optional)
  - Open terminal cd to Messaging -&gt; node app.js

**Congratulation you&#39;re done.**

**If you find any difficulties or need some help, don&#39;t heisted to contact me.**

**Thanks**

**Vishal Patel**

[**Vishal92\_patel@yahoo.com**](mailto:Vishal92_patel@yahoo.com)

**For lasted update visit** [**https://github.com/vishal92patel/web-socket**](https://github.com/vishal92patel/web-socket)