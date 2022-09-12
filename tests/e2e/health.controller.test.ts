import request from "supertest";
import app from "../../src/server";
import config from "../../src/config";

// beforeAll(async () => {
//   // setup method
// });

describe("Test the authorized health path", () => {
  test("should return unauthorized", async () => {
    const response = await request(app).get("/api/health-auth");
    expect(response.statusCode).toBe(401);
  });

  // test("should return authorized", async () => {
  //   const token = "";

  //   const response = await request(app)
  //     .get("/api/health-auth")
  //     .set("Authorization", `Bearer ${token}`);

  //   console.log(response.text);

  //   expect(response.statusCode).toBe(200);
  //   expect(response.text).toBe('{"message":"Healthy"}');
  // });
});
