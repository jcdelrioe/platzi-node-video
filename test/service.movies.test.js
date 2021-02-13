const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');

describe('Services - movies', function () {
  const MoviesServices = proxyquire('../services/movies.js', {
    '../lib/mongo.js': MongoLibMock,
  });
  const MoviesService = new MoviesServices();
  describe('when getMovies method is called', async function () {
    it('should call the getAll MongoLib method', async function () {
      await MoviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('Should return an array of movies', async function () {
      const result = await MoviesService.getMovies({});
      const expected = moviesMock;
      assert.deepStrictEqual(result, expected);
    });
  });
});
