import { compile } from '../index';
describe('complie run correctly', () => {
  it('simple demo', (done) => {
    const template = `<div v-test></div>`;
    const res = compile(template, {
      test (node, directiveMeta) {
        node.addEventListener('click', () => {
          console.log('test');
        });
        console.log(node);
      },
    });
    const test = {};
    expect(test).toEqual(res);
    return done();
  });
});
