import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  timestamp: attr('date'),
  color: attr('string'),

  //Relationships
  tags: DS.hasMany('tag'),
  skills: DS.hasMany('skill'),
  images: DS.hasMany('image'),

  //Special switch
  isFeatured: attr('boolean')
});
