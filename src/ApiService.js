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
 * Setup posts
 */
class GetAuthorsPromise extends CachedPromiseFactory {
  constructor() {
    super();
    this.setDefault([]);
    this.dataSourceUrl = 'http://jsonplaceholder.typicode.com/authors';
  }
  fetchData() {
    return fetch(this.dataSourceUrl)
    .then(response => response.json());
  }
}

const authorsSource = new GetAuthorsPromise();
const getAuthors = authorsSource.toPromise();

export {
  getPosts,
  getAuthors,
};
