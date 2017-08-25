import CachedPromiseFactory from '@/utilities/CachedPromiseFactory';

/*
 * Setup posts
 */
class GetPostsPromise extends CachedPromiseFactory {
  constructor() {
    super();
    this.setDefault([]);
    this.dataSourceUrl = 'https://jsonplaceholder.typicode.com/posts';
  }
  fetchData() {
    return fetch(this.dataSourceUrl)
    .then(response => response.json());
  }
}

const postsSource = new GetPostsPromise();
const getPosts = postsSource.toPromise();

/*
 * Setup users
 */
class GetUsersPromise extends CachedPromiseFactory {
  constructor() {
    super();
    this.setDefault([]);
    this.dataSourceUrl = 'https://jsonplaceholder.typicode.com/users';
  }
  fetchData() {
    return fetch(this.dataSourceUrl)
    .then(response => response.json());
  }
}

const usersSource = new GetUsersPromise();
const getUsers = usersSource.toPromise();

/*
 * Setup comments
 */
class GetCommentsPromise extends CachedPromiseFactory {
  constructor() {
    super();
    this.setDefault([]);
    this.dataSourceUrl = 'https://jsonplaceholder.typicode.com/comments';
  }
  fetchData() {
    return fetch(this.dataSourceUrl)
    .then(response => response.json());
  }
}

const commentsSource = new GetCommentsPromise();
const getComments = commentsSource.toPromise();

export {
  getPosts,
  getUsers,
  getComments,
};
