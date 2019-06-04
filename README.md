![GQL Logo](https://repository-images.githubusercontent.com/188321095/1f5ffe80-86b8-11e9-9fdc-b077c615663a)

## GraphQL for Zesty.io Content Instances

A GraphQL interface using node and apollo that consumes WebEngine endpoints. 

# How to Use
Requires Node 10 or above and NPM 4+. Fork this repository and pull it to your local. 

1. Log into Zesty.io
2. Open the manager interface for the instance you want to access GraphQL
3. In manager, Go to your Schema > settings area
4. Navigate to Developer settings
5. Click GraphQL to turn on
6. Set GraphQL origin to * (this can later be tied to your remote)
7. Open this repo's directory in your terminal
8. cli: `node getfiles.js YOUR_INSTANCE_URL` (use your stage for testing)
9. cli: `npm start`
10. navigate in browser `localhost:4000`
