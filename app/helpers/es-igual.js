import { helper } from '@ember/component/helper';

export function concatenarTest(params/*, hash*/) {
  //return params[0] + " " + params[1];
  return params[0] === params[1];
}

//export default helper(concatenarTest);
export default helper(isEq);
