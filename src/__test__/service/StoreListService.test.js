import { LoginService } from "../../service/LoginService";

describe("Probar Async/Await", () => {
  test("Realizar una petición a una API LoginService", async () => {
    let result = await LoginService();
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});
