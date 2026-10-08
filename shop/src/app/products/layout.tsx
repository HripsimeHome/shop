export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>Products from layout</h1>
      {children} 
    </section>
  );
}