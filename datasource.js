import { RESTDataSource } from 'apollo-datasource-rest';

export class MvrpAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://ab90f66abb07cc8a49695b0b8cf92ab8-dev.preview.zestyio.com/graphql/';
  }

  async getAllArticles() {
    return this.get('articles.json');
  }

  async getArticle(zuid) {
    const result = await this.get('articles.json', {
      zuid: zuid
    });

    return result;
  }

  async getAllAuthors() {
    return this.get('author.json');
  }

  async getAuthor(zuid) {
    const result = await this.get('author.json', {
      zuid
    });

    return result;
  }



};