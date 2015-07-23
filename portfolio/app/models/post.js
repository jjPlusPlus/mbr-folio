import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  content: attr('string'),
  description: attr('string'),
  author: attr('string'),
  timestamp: attr('date'),

  //relationships
  images: hasMany('image'),
  tags: hasMany('tag'),

  //boolean flag to show or hide post
  published: attr('boolean')
});
