<h1>Api For Simple Crud Operations and FrontEnd Admin's</h2>

<p>This api is built for the purpose of handling the initial mundane structural setup when building an api with node, express and mongodb</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#gettingstarted">Getting Started</a></li>
  <li><a href="#prerequisites">Prerequisites</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#tests">Tests</a></li>
  <li><a href="#technologies">Technologies</a></li>
  <li><a href="#authors">Authors</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="introduction">Introduction</h2>
<p>I built this api because I was tired of having to set up things like routes, controllers, db connections, and input validation over and over again whenever I was starting a new project using Express, MongoDB and Nodejs.</p>
<p>
This project has the following features working
<ul>
  <li>User Signup</li>
  <li>User Login</li>
  <li>User Logout</li>
  <li>Item create</li>
  <li>Item update</li>
  <li>Item delete</li>
  <li>Item read</li>
  <li>Items read</li>
</ul>
</p>

<h2 id="gettingstarted">Getting Started</h2>
<p>The server folder holds all the files necessary for the logical implementation of the API. The package.json holds all dependencies, devdependencies and necessary scripts. <br>The API is written in ES6 and is run with <code>npm run dev</code> in development. <br>I've included a Procfile to specify that <code>npm start</code> is used to run the api server on heroku.</p>

<h2 id="prerequisites">Prerequisites</h2>
<p>You'll need to have Nodejs installed in order to run this project on your local machine. You'll also need to install mongodb, but I'd recommend using <a href="https://mlab.com">mLab</a> as it's easier to get started with than having to go through the hassle of the mongodb installation process on your own machine</p>