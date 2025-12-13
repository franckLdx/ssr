import { Route as homeRoute } from '../routes/index'
import { LinkButton } from './LinkButton';

type BigBadaboomProps = {
  error?: Error | null;
  message?: string;
};

export function BigBadaboom({ error, message }: BigBadaboomProps) {
  const displayMessage = message ?? 'Une erreur est survenue.';

  return (
    <div className="mx-auto my-8 p-6 bg-red-50 border border-red-200 rounded-lg text-red-900">
      <h2 className="text-xl font-semibold mb-2">Erreur</h2>
      <p className="mb-4">{displayMessage}</p>
      {error && (
        <details className="text-xs bg-red-100 p-2 rounded mb-4">
          <summary className="cursor-pointer">Détails de l'erreur</summary>
          <pre className="whitespace-pre-wrap mt-2">{error.message}
            {error.stack}</pre>
        </details>
      )}
      <div className="flex gap-2">
        <LinkButton to={homeRoute.to}>Retour à l'acceuil</LinkButton>
      </div>
    </div>
  );
}

export default BigBadaboom;
