import Ember from 'ember';

export default Ember.Route.extend({
  var questions = [{
    id : 1,
    username: "codecutie101",
    category: "basic question",
    title: "How do I type?"
    question: "When my fingers move nothing happens"
  }, {
    id : 2,
    username: "notanumber_downWithCapitalizzzm",
    category: "basic question",
    title: "How do I turn my computer on?"
    question: "IDk, i'm like using my phone right now. Can I code from there?"
  }];
  export default Ember.Route.extend({
  model() {
    return questions;
  },
});
