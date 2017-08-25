import CachedPromiseFactory from '@/utilities/CachedPromiseFactory';

class GetPostListPromise extends CachedPromiseFactory {
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

const postListSource = new GetPostListPromise();
const getPostList = postListSource.toPromise();

export {
  postListSource,
  getPostList,
};
