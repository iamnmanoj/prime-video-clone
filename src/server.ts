import Fastify from 'fastify';
import homePageRoute from './routes/home-page';

const fastify = Fastify({
  logger: true
})

fastify.register(homePageRoute);

const startServer = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
}

startServer();