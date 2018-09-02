import { baseOptions } from './options';
import { createCompiler } from './create-compiler';

const { compile, compileToFunctions } = createCompiler(baseOptions);

export { compile, compileToFunctions };
