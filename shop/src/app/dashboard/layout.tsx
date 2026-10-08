export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Sidebar</aside>
      <main>{children}</main>
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
