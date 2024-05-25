import { describe, it, expect } from 'bun:test'
import { User } from 'user/user';

describe("Test User Module from sub project", () => {
  it("should call user module from sub project", async () => {
    const user = new User("arifal");
    expect(user.username).toBe("arifal");
  });
});