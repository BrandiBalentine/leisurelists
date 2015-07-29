import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  releaseDate: DS.attr('date'),
  system: DS.attr('string'),
  image: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});