const app = require("../src/App");
const session = require("supertest");
const agent = session(app);

const character = {
  id: 1,
  name: "Rick Sanchez",
  species: "Human",
  status: "Alive",
};
const character2 = { id: 2, name: "Morty", species: "Human", status: "Alive" };

describe('Test de RUTAS:', () => {
  describe("GET /rickandmorty/character/:id", () => {
    it('Responde con status: 200', async () => {
      await agent.get('/rickandmorty/character/1').expect(200);
    });

    it(
      'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"'
      , async () => {
        const { body } = await agent.get('/rickandmorty/character/1')

        expect(body).toHaveProperty(
          'species' &&
          'id' &&
          'name' &&
          'status' &&
          'origin' &&
          'image'
        );
      });
    
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/11111").expect(500);
    });

  })
  describe("GET /rickandmorty/login", () => {
    it("Valida datos correctos", async () => {
      const response = await agent
        .get("/rickandmorty/login?email=jram828@yahoo.com&password=Jram0828")
        .expect(200);
      expect(response.body).toEqual({ access: true });
    });

    it("Valida datos incorrectos", async () => {
      const response = await agent
        .get("/rickandmorty/login?email=jram828@yahoo.com&password=Jram0828")
        .expect(400);
      expect(response.body).toEqual({ access: false });
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("Lo que envíes por body debe ser devuelto en un arreglo", async () => {
      const response = await agent
        .post("/rickandmorty/fav")
        .send(character)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toContainEqual(character);
    });

    it("Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente.", async () => {
      const response = await agent
        .post("/rickandmorty/fav")
        .send(character2)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toContainEqual(character2);
      expect(response.body).toEqual([character, character2]);
    });
    
  });
   describe("DELETE /rickandmorty/fav/:id", () => {
     it("Devuelve un arreglo con los elementos sin modificar si el Id no existe", async () => {
       const response = await agent.delete("/rickandmorty/fav/1111").expect(200);

       expect(response.body).toEqual([character, character2]);
     });

     it(" Cuando se envía un Id válido se elimina correctamente el personaje.", async () => {
       const response = await agent.delete("/rickandmorty/fav/1").expect(200);

       expect(response.body).toEqual([character2]);
     });

   });
})