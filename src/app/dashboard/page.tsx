// export default function dashboard() {
//   return (
//     <div>
//       <h2>Dashvboard page(children)</h2>
//     </div>
//   );
// }

export default async function DashboardPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

// page.tsx Создаёт основное содержимое маршрута
