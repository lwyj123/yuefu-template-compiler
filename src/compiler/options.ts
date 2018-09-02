import modules from './modules/index';
import directives from './directives/index';

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || []);
  }, []).join(',');
}

export const baseOptions: CompilerOptions = {
  expectHTML: true,
  modules,
  directives,
  staticKeys: genStaticKeys(modules),
};
