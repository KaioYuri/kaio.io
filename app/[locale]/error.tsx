'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Registrar o erro em um serviço de relatório de erros
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Ah não, alguma coisa deu errado... talvez atualizar a página resolva!</p>
    </div>
  );
}
