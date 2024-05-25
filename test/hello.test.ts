import { describe, it, expect } from 'bun:test'
import { sayHello } from '../src/hello';

describe('bun test ', () => {
  it('should say hello with name', async () => {
    const response = sayHello('arifal');
    expect(response).toBe('Hello arifal');
  });
});