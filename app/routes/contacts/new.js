import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ContactsNewRoute extends Route {
  @service store;

  model() {
    return {};
  }
  @action save(data) {
    let contact = this.store.createRecord('contact', data);
    contact.save().then(() => {
      this.transitionTo('contacts');
    });
  }
}
