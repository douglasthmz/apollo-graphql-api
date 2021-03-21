import app from './app';

app.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server rodando na ${url}`);
});
