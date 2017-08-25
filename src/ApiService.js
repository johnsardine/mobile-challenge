import CachedPromiseFactory from '@/utilities/CachedPromiseFactory';

/*
 * Setup posts
 */
class GetPostsPromise extends CachedPromiseFactory {
  constructor() {
    super();
    this.setDefault([]);
    this.dataSourceUrl = 'http://jsonplaceholder.typicode.com/posts';
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
    this.dataSourceUrl = 'http://jsonplaceholder.typicode.com/users';
  }
  fetchData() {
    return fetch(this.dataSourceUrl)
    .then(response => response.json());
  }
}

const usersSource = new GetUsersPromise();
const getUsers = usersSource.toPromise();

export {
  getPosts,
  getUsers,
};
