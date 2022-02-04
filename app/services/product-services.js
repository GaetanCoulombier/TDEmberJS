import Service from '@ember/service';

import { dProducts, dPromos } from 'td2/data/datas';

export default class ProductServicesService extends Service {
  products = dProducts;
  promos = dPromos;
  elem;

  get activeServices() {
    return dProducts.filterBy('active', true);
  }

  get countActive() {
    return this.activeServices.length;
  }

  get sumActive() {
    let callSum = (somme, product) => product.price + somme;
    return this.activeServices.reduce(callSum, 0);
  }

  get couleur() {
    let sum = 0;
    for (var i = 0; i < this.countActive; i++) {
      sum += this.activeServices[i];
    }
    return sum;
  }
}
