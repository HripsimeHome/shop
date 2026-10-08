type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div>
      <h1>Product category</h1>

      <p>{slug.join(" / ")}</p>
    </div>
  );
}
