import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
import ContactArray from '../classes/contact-array';

export default class TestNewRoute extends Route {
  @service store;

  model() {
    return new ContactArray(this.store.findAll('contact'));
  }

  /*
  @action add(name, surname, mail) {
    let contact = this.store.createRecord('contact', {
      nom: name,
      prenom: surname,
      email: mail
    });
    contact.save();
    //contact.rollbackAttributes();
  }
  */

  @action delete(contact) {
    contact.deleteRecord();
  }

  @action saveAll(contacts) {
    contacts.forEach((c) => {
      c.save();
    });
  }

  @action cancelAll(contacts) {
    contacts.forEach((c) => {
      c.rollbackAttributes();
    });
  }
}
