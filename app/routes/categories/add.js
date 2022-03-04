import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesAddRoute extends Route {
  model() {
    return new Object(null);
  }

  @action save(category) {
    this.router.save(category);
  }
}
