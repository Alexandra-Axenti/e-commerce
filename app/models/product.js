import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.Store.attr(),
  brand: DS.Store.attr(),
  content: DS.Store.attr(),
  image: DS.Store.attr(),
  price: DS.Store.attr(),
  stock: DS.Store.attr()
});
