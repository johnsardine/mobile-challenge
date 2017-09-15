> The Vue.js version of Unbabel Mobile challenge, done just for fun.

## The challenge

From a high level point of view the demo consists of a list of posts, where each post has its own detail.

**Posts Screen**

A post has a title and it's up to you how to display it. To retrieve the posts, you can use the following: [http://jsonplaceholder.typicode.com/posts](http://jsonplaceholder.typicode.com/posts)

When a post is tapped, you should go to the detail screen.

**Detail screen**

A post detail screen, will have:

- Its author.
- Its description (via the body ).
- Number of comments it has.

You can retrieve the remaining information from:
[http://jsonplaceholder.typicode.com/users](http://jsonplaceholder.typicode.com/users) [http://jsonplaceholder.typicode.com/comments](http://jsonplaceholder.typicode.com/comments)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
