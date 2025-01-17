import expect from 'expect';

import {buildTestingTree, setupHttpHooks} from './utils.js';

describe('@puppeteer/ng-schematics: test', () => {
  setupHttpHooks();

  it('should create default file', async () => {
    const tree = await buildTestingTree('test', {
      name: 'myTest',
    });
    expect(tree.files).toContain('/e2e/tests/my-test.e2e.ts');
    expect(tree.files).not.toContain('/e2e/tests/my-test.test.ts');
  });

  it('should create Node file', async () => {
    const tree = await buildTestingTree('test', {
      name: 'myTest',
      testingFramework: 'node',
    });
    expect(tree.files).not.toContain('/e2e/tests/my-test.e2e.ts');
    expect(tree.files).toContain('/e2e/tests/my-test.test.ts');
  });
});
