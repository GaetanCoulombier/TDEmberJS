import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactsUpdateRoute extends Route {
  renderTemplate() {
    this.render('contacts.new');
  }

  setupController() {

  }

  @action save(c) {
    let model = this.modelFor(this.routeName);
    Object.assign(model, c);
    model.save().then(() => {
      this.router.transitionTo('contacts');
    });
  }
}
