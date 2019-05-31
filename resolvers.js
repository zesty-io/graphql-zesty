const resolvers = {

	Query: {
		clipping: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getClipping(zuid),
		clippings: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllClippings(),
		widget: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getWidget(zuid),
		widgets: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllWidgets(),
		blog: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getBlog(zuid),
		blogs: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllBlogs(),
		authorPage: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getAuthorPage(zuid),
		authorPages: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllAuthorPages(),
		author: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getAuthor(zuid),
		authors: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllAuthors(),
		categoryPage: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getCategoryPage(zuid),
		categoryPages: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllCategoryPages(),
		category: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getCategory(zuid),
		categories: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllCategories(),
		article: (root, { zuid }, { dataSources }) => {
			console.log(zuid); 
			return dataSources.mvrpAPI.getArticle(zuid)
		},
		articles: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllArticles(),
		tagPage: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getTagPage(zuid),
		tagPages: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllTagPages(),
		tag: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getTag(zuid),
		tags: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllTags(),
		homePage: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getHomePage(zuid),
		homePages: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllHomePages(),
		basicPage: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getBasicPage(zuid),
		basicPages: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllBasicPages(),
		image: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getImage(zuid),
		images: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllImages(),
		timeCapsule: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getTimeCapsule(zuid),
		timeCapsules: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllTimeCapsules(),
		portfolio: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getPortfolio(zuid),
		portfolios: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllPortfolios(),
		newsletterSignup: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getNewsletterSignup(zuid),
		newsletterSignups: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllNewsletterSignups(),
		servicesPage: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getServicesPage(zuid),
		servicesPages: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllServicesPages(),
		service: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getService(zuid),
		services: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllServices(),
		socialLink: (root, { zuid }, { dataSources }) => dataSources.mvrpAPI.getSocialLink(zuid),
		socialLinks: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllSocialLinks(),
	},
		Article: {
		author: (root, args, { dataSources }) => dataSources.mvrpAPI.getAuthor(root.author),
		tags: (root, args, { dataSources }) => root.tags.map(zuid => dataSources.mvrpAPI.getTags(zuid)),
	},
	Image: {
		article_connection: (root, args, { dataSources }) => {
			return dataSources.mvrpAPI.getArticle(root.article_connection)
		},
	},
}

export default resolvers;