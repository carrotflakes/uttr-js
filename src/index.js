import parse from './uttr.sg';
import escodegen from 'escodegen';
import convert from './convert.uttr';
import preCode from './preDefinedFunctions';

export class Compiler {

  parse(source) {
    return parse(source);
  }

  convertAst(uttrAst) {
    return convert.main(uttrAst);
  }

  render(esAst) {
    return escodegen.generate(esAst);
  }

  compile(source) {
    return preCode + this.render(this.convertAst(this.parse(source)));
  }

}
