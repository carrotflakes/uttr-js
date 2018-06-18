import parse from './uttr.sg';
import escodegen from 'escodegen';
import convert from './convert.uttr';

class Compiler {

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
    return this.render(this.convertAst(this.parse(source)));
  }

}

module.exports = Compiler;
