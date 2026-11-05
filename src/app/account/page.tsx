import Link from "next/link";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-shop px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* Grid с двумя колонками:
- первая — 240px;
- вторая — оставшееся доступное пространство. */}
        <aside className="rounded-card border border-border-default bg-surface p-card">
          <nav className="flex flex-col gap-4">
            <Link href="/account">
              Dashboard
            </Link>

            <Link href="/account/orders">
              Orders
            </Link>

            <Link href="/account/settings">
              Settings
            </Link>
          </nav>
        </aside>

        <main className="min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}