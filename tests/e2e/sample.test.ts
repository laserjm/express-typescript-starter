import request from "supertest";
import app from "../../src/server";

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/api/health")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should response the GET method 2", () => {
    return request(app)
      .get("/api/health")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("It should response the GET method async await", async () => {
    const response = await request(app).get("/api/health");
    expect(response.statusCode).toBe(200);
  });
});
