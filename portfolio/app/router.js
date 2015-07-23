import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('projects', function() {
    this.route('project');
    this.route('new');
    this.route('edit');
  });
  this.resource('posts', function() {
    this.route('post');
    this.route('new');
    this.route('edit');
  });
  this.resource('events', function() {
    this.route('new');
    this.route('edit');
  });
  this.resource('experiences', function() {
    this.route('new');
    this.route('edit');
  });

  this.route('about');

  //Admin Portal
  this.route('admin');
  this.route('analytics');
  this.route('tags');
  this.route('images');
});

export default Router;
