![image](https://user-images.githubusercontent.com/729972/128081791-48ecebbc-5600-465c-bcd4-fdb14f49556f.png)


## GraphQL for Zesty.io Content Instances

A GraphQL interface using node and apollo that consumes WebEngine endpoints. 

# How to Use and run locally
Requires Node 14 or above and NPM 7+ Fork this repository and pull it to your local. 

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

# Example Deploy to GCP

See package.json `npm run build` and `npm run deploy` scripts for an example of how to deploy to Google Cloud Run in 2 commands. Not the `zesty-dev` is a place holder envirnoment project name for GCP, you will need to replace that with your own.

# Docker File

The `Dockerfile` is a simple docker container to run and deploy the service locally. Use that file to delpoy this service to other cloud services.
