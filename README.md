## Planning

1. Configuration/dependencies
````
  Run `ember new forum`
  `ember s`
````
  _This will automatically generate a project with the required Ember files and directories._
  * It could include a short description of what each does for you

  ````
  `ember g route ROUTE-NAME`
  ````
  _This will_

  1A. Seed model with hardcoded data
  2. Create template/index.hbs with links to view each question with author
  3. Create attributes in models/questions.js
  4. install emberfire
  5. create .json file for hardcoded data to update into firebase
  6. adjust model hook
  7. add tile to view individual component.
  8. update template
  9. start working on deleting and updating an individual question BUT THROUGH ADMIN SETTINGS
    * add delete action button to question-tile .hbs
    * add delete action function to question-tile component .js
    * on app/index.hbs add: path to where you're going, bring your model with ya, and any action that may need to take place
  10. Create new post along with forum
  11. Move on to creating comments for each individual post
    * update model hook to include RSVP hash
    * seed json file with new information and then update firebase
    * integrate one to many relationship


2. Specs
  * Questions should include the content of the question itself, an author, and additional notes.
  * Answers should include the content of the answer and the author.
  * Include a header and/or navbar that appears on all pages. It should contain the name of your site and a link to the home page, and other content such as social media, LinkedIn, etc.
  * List all questions on the homepage, displaying only the question and the name of the author
  * Allow users to click a question, to be routed to another page containing additional information and question details.
  * Allow users to add and edit questions.
  * Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.
  * Spec 1: Description, input, output.
  * Spec 2: Description, input, output.

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome

## Steps
1. Create application template that will contain links to different routes so navigation between pages is easy.
https://www.learnhowtoprogram.com/javascript/ember-js/application-template
2. generate routes for about, resources,



# forum

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd forum`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
