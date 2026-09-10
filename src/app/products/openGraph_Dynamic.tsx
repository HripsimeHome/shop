import type { Metadata } from "next";
import { getProducts } from "@/lib/products";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await getProduct(id);

  return {
    title: product.title,

    description: product.description,

    openGraph: {
      title: product.title,

      description: product.description,

      images: [
        {
          url: product.thumbnail,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],

      type: "website",
    },
  };
}
