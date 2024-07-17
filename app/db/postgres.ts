import postgres from 'postgres';

export const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: {
    rejectUnauthorized: false, // Exemplo de configuração específica do SSL
  },
});
