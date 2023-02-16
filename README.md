# Server-side-Rendering-React-from-Scratch

Learn how to set up server-side render with your React app and put it out on Firebase Hosting.
This setup uses Webpack, React DOM Server, and Babel to create an app that can run both on a browser and a server.
We'll use Webpack to manage and bundle our JavaScript files and other dependencies. 
Then React DOM server will provide a "virtual" implementation of the DOM so you can create an HTML string version of your app. 
Then finally you'll use Babel to write modern JavaScript syntax and convert to commonjs module system on the server.

## What Is Server-side Rendering And How Does It Improve Site Speed?

Server-side rendering (SSR) addresses the performance and search engine optimization issues of single-page JavaScript applications. 
In contrast to client-side rendering, it generates static content on the server before sending it over to the user’s browser.

![ser](https://user-images.githubusercontent.com/50789325/219477090-24c441e6-56f4-4ab1-9319-8d4c6d087ca5.jpeg)
