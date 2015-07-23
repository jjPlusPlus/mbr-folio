import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  type: attr('string'),
  url: attr('string'),
  height: attr('string'),
  width: attr('string'),

  //relationships
  posts: hasMany('post'),
  projects: hasMany('project'),
  events: hasMany('event'),
  experiences: hasMany('experience'),

  //flags
  homepage: attr('bool'),
  active: attr('bool')
});
