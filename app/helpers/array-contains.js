import { helper } from '@ember/component/helper';

// Cet helper permet de générer des listes en html ce qui nous permettra de simplifier le processus de creation.

export default helper(function arrayContains(params /*, hash*/) {
  const [items, value, prop] = params; // on recupère les arguments de la fonction
  let id = prop || 'id'; // on concatène le numero avec id pour le classer
  return items.filterBy(id, value[id]).length > 0; // on retourne la ligne generé
});
