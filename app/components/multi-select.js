import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = [];
  selected = [];
  id = 'id';

  constructor() {
    // on instancie les variables a la creation de la class
    super(...arguments);
    this.elements = this.args.elements; // La variable elements permmet de lister tous les elements disponible
    this.selected = this.args.selected; // La variable selected permmet de lister tous les elements selectionné si ils sont disponibles
    this.id = this.args.identifier || 'id'; // Le id donne un identifient unique à chaque item
  }

  @action // Le commentaire action permet de dire a ember que la fonction suivante est un evenement
  change(event) {
    let select = event.target; // on recupere l'item cliqué dans l'evenement

    // on l'ajoute aux elements selectionnés
    var selectedIds = [...select.selectedOptions].map((option) => option.value);
    if (this.args.onChange) {
      this.args.onChange(
        this.elements.filter(
          (elm) => selectedIds.filter((e) => e === elm[this.id]).length > 0
        )
      );
    }
  }
}
