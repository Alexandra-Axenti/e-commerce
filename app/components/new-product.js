import Ember from 'ember';

export default Ember.Component.extend({
  newProductForm: false,

  actions: {
    productFormShow() {
      this.set('newProductForm', true);
    },

    saveProduct() {
      var params = {
        name: this.get('name'),
        brand: this.get('brand'),
        content: this.get('content'),
        image: this.get('image'),
        price: this.get('price'),
        stock: this.get('stock')
      };
      this.set('newProductForm', false);
      this.sendAction('saveProduct', params);
    }
  }
});
