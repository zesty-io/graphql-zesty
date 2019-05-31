import { RESTDataSource } from 'apollo-datasource-rest'

export class MvrpAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://ab90f66abb07cc8a49695b0b8cf92ab8-dev.stage-preview.zestyio.com/-/gql/'
	}

	async getAllClippings() {
		return this.get('clippings.json');
	}

	async getClipping(zuid) {
		return await this.get('clippings.json', {
			zuid: zuid
		});

	}

	async getAllWidgets() {
		return this.get('widgets.json');
	}

	async getWidget(zuid) {
		return await this.get('widgets.json', {
			zuid: zuid
		});

	}

	async getAllBlogs() {
		return this.get('blog.json');
	}

	async getBlog(zuid) {
		return await this.get('blog.json', {
			zuid: zuid
		});

	}

	async getAllAuthorPages() {
		return this.get('author_page.json');
	}

	async getAuthorPage(zuid) {
		return await this.get('author_page.json', {
			zuid: zuid
		});

	}

	async getAllAuthors() {
		return this.get('author.json');
	}

	async getAuthor(zuid) {
    console.log('resolver'.zuid);
		return await this.get('author.json', {
			zuid: zuid
		});

	}

	async getAllCategoryPages() {
		return this.get('category_page.json');
	}

	async getCategoryPage(zuid) {
		return await this.get('category_page.json', {
			zuid: zuid
		});

	}

	async getAllCategories() {
		return this.get('categories.json');
	}

	async getCategory(zuid) {
		return await this.get('categories.json', {
			zuid: zuid
		});

	}

	async getAllArticles() {
		return this.get('article.json');
	}

	async getArticle(zuid) {
		return await this.get('article.json', {
			zuid: zuid
		});
	}

	async getAllTagPages() {
		return this.get('tag_page.json');
	}

	async getTagPage(zuid) {
		return await this.get('tag_page.json', {
			zuid: zuid
		});

	}

	async getAllTags() {
		return this.get('tag.json');
	}

	async getTag(zuid) {
		return await this.get('tag.json', {
			zuid: zuid
		});

	}

	async getAllHomePages() {
		return this.get('home_page.json');
	}

	async getHomePage(zuid) {
		return await this.get('home_page.json', {
			zuid: zuid
		});

	}

	async getAllBasicPages() {
		return this.get('basic_page.json');
	}

	async getBasicPage(zuid) {
		return await this.get('basic_page.json', {
			zuid: zuid
		});

	}

	async getAllImages() {
		return this.get('images.json');
	}

	async getImage(zuid) {
		return await this.get('images.json', {
			zuid: zuid
		});

	}

	async getAllTimeCapsules() {
		return this.get('time_capsule.json');
	}

	async getTimeCapsule(zuid) {
		return await this.get('time_capsule.json', {
			zuid: zuid
		});

	}

	async getAllPortfolios() {
		return this.get('portfolio.json');
	}

	async getPortfolio(zuid) {
		return await this.get('portfolio.json', {
			zuid: zuid
		});

	}

	async getAllNewsletterSignups() {
		return this.get('newsletter_signup.json');
	}

	async getNewsletterSignup(zuid) {
		return await this.get('newsletter_signup.json', {
			zuid: zuid
		});

	}

	async getAllServicesPages() {
		return this.get('services_page.json');
	}

	async getServicesPage(zuid) {
		return await this.get('services_page.json', {
			zuid: zuid
		});

	}

	async getAllServices() {
		return this.get('service.json');
	}

	async getService(zuid) {
		return await this.get('service.json', {
			zuid: zuid
		});

	}

	async getAllSocialLinks() {
		return this.get('social_links.json');
	}

	async getSocialLink(zuid) {
		return await this.get('social_links.json', {
			zuid: zuid
		});

	}
};