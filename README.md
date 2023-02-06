Welcome the TESS Participant App

# Architecture
Framework: Ant Pro Design v5.

Database: AWS DynamoDB, AWS Amplify Datastore

APIs: Graphql API 

Authentication Protocol: Amplify Authenticator


# Online Documentation

## Deploy
~~~
yarn build
~~~
~~~
yarn start
~~~

## Accessing backend using Amplify CLI

Install amplify cli in order to work with your backend locally
~~~
npm install -g @aws-amplify/cli
~~~
Pull your amplify project 
~~~
amplify pull --appId d2n4vdiwp97yst --envName dev
~~~
Install dependencies
This will generate an ```amplify``` folder in your app directory and ```Aws-exports.js, models and ui-components``` folder in the src directory
~~~
yarn add aws-amplify @aws-amplify/ui-react  
~~~
Generate GraphQL documents based off current datastore 
This will generate a ```graphql``` folder under the src directory containing the ```query.js, mutation.js and subscription.js``` files that the frontend will use to access dynamoDB

Note: Use suggested values when running the command

Note: To rerun the command you need to remove the ```.graphqlconfig.yml``` file in the src directory
~~~
amplify codegen add 
~~~

# Helpful Links
#### AWS AMPLIFY Documentation
https://docs.amplify.aws/console/data/data-model/#datastore-and-graphql 

# Code Structure
```
├── config # umi configuration, including routing, construction and other configurations
├── mock # local mock data
├── amplify
│ ├── backend
│ │ ├── api
│ │ │ ├── tessuserappdev # api name
│ │ │ │ ├── build # changes to this folder will be overwritten
│ │ │ │ ├── schema.graphql # contains schema for all tables 
├── public
│ └── favicon.png # Favicon
├── src
│ ├── assets # Local static resources
│ ├── components # common components
│ ├── e2e # Integration test case
│ ├── layouts # General layout
│ ├── models # Global dva model
│ ├── graphql # graphQL documents for frontend communication w/ backend
│ │ │ ├── queries.js
│ │ │ ├── mutations.js 
│ │ │ ├── subscriptions.js
│ ├── pages # Page entry and common templates
│ │   ├── battery # Pages for battery
│ │   ├── dashboard # Pages for dashboard
│ │   ├── electric-vehicle-charger # Pages for EV charger
│ │   ├── exception # Pages for exception
│ │   ├── heating-and-cooling # Pages for heating & cooling
│ │   ├── result # Pages for results (success/fail)
│ │   ├── solar-panels # Pages for solar panel
│ │   ├── user/login # Pages for login/register
│ │   ├── waterheater # Pages for waterheater
│ ├── services # Background interface services
│ ├── utils # tool library
│ ├── locales # Internationalized resources
│ ├── global.less # global style
│ └── global.ts # Global JS
├── tests # test tools
├── README.md
└── package.json
```
# Contribution
Please review the [PostRoad Energy Contribution Guide](https://github.com/postroad-energy/.github/wiki) for information on how to get started contributing to the project.


More detailed instructions are available from the project web page at [Building PROJECT](PROJECT_WEBPAGE#Build). For general developer guidelines and tips, see the [PostRoad Energy Contribution Guide](https://github.com/postroad-energy/.github/wiki).
