import { helper } from '@ember/component/helper';

export default helper(function plural(params) {
  let [count, zero, un, autre] = params;
  switch (count) {
    case 0:
      return zero;
    case 1:
      return un;
    default:
      return count + ' ' + autre;
  }
});
