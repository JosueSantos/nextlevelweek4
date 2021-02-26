import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("Surveys", () => {
    // beforeAll(async () => {
    //     const connection = await createConnection();
    //     await connection.runMigrations();
    // });

    // it("Should be able to create a new surveys", async () => {
    //     const response = await request(app).post("/surveys")
    //     .send({
    //         title: "Title Exemple",
    //         description: "Description Exemple"
    //     })
    //     expect(response.status).toBe(201);
    //     expect(response.body).toHaveProperty("id");
    // });

    // it("Should be able to get all surveys", async () => {
    //     await request(app).post("/surveys")
    //     .send({
    //         title: "Title2 Exemple",
    //         description: "Description2 Exemple"
    //     });

    //     const response = await request(app).get("/surveys");

    //     expect(response.body.length).toBe(2);
    //     expect(response.status).toBe(200);
    // });

    it("Teste Test", async () => {
        expect(1+1).toBe(2);
    });
});