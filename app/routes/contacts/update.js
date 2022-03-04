import Route from '@ember/routing/route';

export default class ContactsUpdateRoute extends Route {

  renderTemplate(){
    this.render('contacts.new');
  }
}
