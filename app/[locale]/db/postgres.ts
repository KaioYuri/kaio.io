import postgres from 'postgres';

export const sql = postgres(process.env.POSTGRES_KAIO_URL!, {
  ssl: 'allow',
});
