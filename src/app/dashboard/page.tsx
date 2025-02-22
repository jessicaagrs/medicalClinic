import { getServerSession } from 'next-auth';

export default async function Dashboard() {
  const session = await getServerSession();
  return (
    <div>
      <p>{session?.expires}</p>
      Página Dash
    </div>
  );
}
