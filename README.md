![GQL Logo](https://repository-images.githubusercontent.com/188321095/1f5ffe80-86b8-11e9-9fdc-b077c615663a)

## GraphQL for Zesty.io Content Instances

A GraphQL interface using node and apollo that consumes WebEngine endpoints. 

# How to Use
Requires Node 10 or above and NPM 6+. Fork this repository and pull it to your local. 

1. Log into Zesty.io
2. Open the manager interface for the instance you want to access GraphQL
3. In manager, Go to the settings app
4. Navigate to General Settings
5. Turn on WebEngine mode to Hybrid (headless if you do not serve a website via webengine)
6. Set GraphQL origin to * (this can later be tied to your remote)
7. Open this repo's directory in your terminal
8. run `npm install`
9. cli: `npm run setup -- https://YOUR.INSTANCE.URL` (use your stage [HASH]-dev.webengine.zesty.io url for testing)
10. cli: `npm start`
11. navigate in browser `[localhost:4000](http://localhost:4000/)`
