import { StoreListService } from "../../service/StoreListService";

describe("Probar Async/Await", () => {
  test("Realizar una petición a una API StoreListService", async () => {
    let result = await StoreListService();
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});
