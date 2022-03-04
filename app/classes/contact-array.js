export default class ContactArray {
  data = [];

  constructor(data) {
    this.data = data;
  }

  get contacts() {
    return this.data.filterBy('isDeleted', false);
  }

  get deleteds() {
    return this.data.filterBy('isDeleted', true);
  }

  get deletedCount() {
    return this.deleteds.length;
  }
}
