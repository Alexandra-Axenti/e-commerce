import Ember from 'ember';

export default Ember.Component.extend({
  newProductForm: false,

  actions: {
    productFormShow() {
      this.set('newProductForm', true);
    },

    saveProduct() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        brand: this.get('brand') ? this.get('brand') : "",
        content: this.get('content') ? this.get('content') : "",
        image: this.get('image') ? this.get('image') : "",
        price: this.get('price') ? this.get('price') : 0,
        stock: this.get('stock') ? this.get('stock') : 0
      };
      this.set('newProductForm', false);
      this.sendAction('saveProduct', params);
    }
  }
});
