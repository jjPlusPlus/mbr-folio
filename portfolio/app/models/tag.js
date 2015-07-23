import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  color: attr('string'),

  //relationships
  projects: hasMany('project'),
  posts: hasMany('post')
});
