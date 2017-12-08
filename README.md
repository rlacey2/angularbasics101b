### angularbasics101b  
#### November 2017  AngularJS/Express.js/Node.js Demonstration



Cloud demos (if deployed) at:
1. [Heroku](https://angularbasics101b.herokuapp.com/#/home)  
2. [IMB Bluemix](https://angularbasics101b.eu-gb.mybluemix.net/#/home) 

A small client-server application where the server is provided with node.js/express.js and the client with AngularJS.

Key features Client Side:
1. ng-view   
2. $routeProvider
2. multiple view controllers in separate files
3. angular bi-directional updating
4. using a service to share data
5. ng-click, ng-if, ng-disabled 
6. recaptcha from Google (needs api keys)
7. nrzLightify - a third party module to display messages
8. angular-cookie-law - a third party cookie warning feature
9. bower to maintain some client side third-party code


Key features Server Side:
1. Express.js
2. Platform detection for server/port configuration
3. Use of test SSL Certs for localhost usage on port 3443
 
Platform requirements to install this application locally:

1. [Installing git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
2. [Installing node.js with npm](https://nodejs.org/en/download/) 
3. [Installing yarn](https://yarnpkg.com/en/)				
4. [optional, installing nodemon](https://www.npmjs.com/package/nodemon/) 

To install locally, assuming platform requirements prepared:

1. use git to clone or manually extract the zip file, 
2. open a command window in the application folder and type the following commands to start on localhost:3443. You may specify a different port number by supplying is as an argument.
    1. yarn install
    2. node server.js [port]    (or nodemon server.js  [port]if nodemon installed)
	

 