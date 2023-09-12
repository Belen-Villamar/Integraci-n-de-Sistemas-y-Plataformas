// tests/mongodbAdapter.test.js

const mongodbAdapter = require('../adapters/MongoDBAdapter'); // Ajusta la ruta según tu estructura

describe('MongoDB Adapter Tests', () => {
  // Prueba para obtener todos los documentos de una colección
  it('should retrieve all documents from a collection', async () => {
    const collectionName = 'citas'; // Reemplaza con el nombre de tu colección
    const documents = await mongodbAdapter.getAllDocuments(collectionName);

    expect(documents).toBeDefined();
    expect(Array.isArray(documents)).toBe(true);
  });

  // Prueba para insertar un nuevo documento en una colección
  it('should insert a new document into a collection', async () => {
    const collectionName = 'citas'; // Reemplaza con el nombre de tu colección
    const newDocument = {
      key: 'value',
    };
    const insertedDocument = await mongodbAdapter.insertOneDocument(collectionName, newDocument);

    expect(insertedDocument).toBeDefined();
    expect(insertedDocument.key).toBe('value');
  });

  // Agrega más pruebas para otras funciones del adaptador
});
