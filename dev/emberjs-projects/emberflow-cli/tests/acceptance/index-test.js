import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'emberflow-cli/tests/helpers/start-app';

var application;

module('Acceptance: Index', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('index page has a title and a list of questions', function(assert) {
  visit('/');
  click('ul:not(.nav) > li > a:first');
  andThen(function() {
    assert.equal(find('h2').text(), 'Welcome to Emberoverflow', 'Application header is rendered');
    assert.equal(find('ul:not(.nav) > li').length,2, 'There are two questions in the list');
  });
  test('quesion links on index page lead to questions', function() {
    visit('/');
    click('ul:not(.nav) > li > a:first');
      andThen(function() {
      equal(
        find('h2').length,
        1,
        'Question header is rendered'
        );
      equal(
        find('p').length,
        2,
        'Question and author are rendered'
      );
    });
  });
});