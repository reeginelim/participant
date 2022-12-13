Welcome the TESS Participant App

DESCRIBE_PROJECT_HERE

# Online Documentation

You can find the latest PROJECT documentation, including a programming guide, on the [project web page](PROJECT_WEBPAGE). This README file only constains basic setup instructions.

# Building PROJECT

PROJECT is built using TOOLS. To build PROJECT and use the examples, run the following:

~~~
$ COMMANDS...
~~~

More detailed instructions are available from the project web page at [Building PROJECT](PROJECT_WEBPAGE#Build). For general developer guidelines and tips, see the [PostRoad Energy Contribution Guide](https://github.com/postroad-energy/.github/wiki).

# Overview

PROJECT_DEVELOPER_ORIENTATION

# Example

DESCRIBE_EXAMPLES

# Testing

DESCRIBE_TESTING_PROCEDURE

# Contribution

Please review the [PostRoad Energy Contribution Guide](https://github.com/postroad-energy/.github/wiki) for information on how to get started contributing to the project.

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
│ │   ├── account # Pages for account
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
