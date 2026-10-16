export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <aside className="col-span-4">Sidebar</aside>
      <main className="col-span-8">{children}</main>
    </div>
  );
}

// {children} в dashboard/layout.tsx получит: dashboard/page.tsx

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <aside>
//         Dashboard Sidebar
//       </aside>

//       <main>
//         {children}
//       </main>
//     </div>
//   );
// }

// Во вложенном Layout {children} содержит страницу или следующий вложенный Layout.

// Layout действует не только на свою page.tsx, а на своё поддерево маршрутов.
// Например:
// dashboard/layout.tsx
//         ↓
// /dashboard/*
