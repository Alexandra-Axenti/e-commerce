import Ember from 'ember';

export default Ember.Component.extend({
  editProductForm: false,

  actions: {
    editProductForm() {
      this.set('editProductForm', true);
  },
    update(product) {
      var params = {
        name: this.get('name'),
        brand: this.get('brand'),
        content: this.get('content'),
        image: this.get('image'),
        price: parseInt(this.get('price')),
        stock: parseInt(this.get('stock'))
      };
      this.set('editProductForm', false);
      this.sendAction('update', product, params);
    }
  }
});
