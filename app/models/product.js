import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  brand: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  stock: DS.attr()
});
