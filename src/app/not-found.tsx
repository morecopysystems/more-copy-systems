import { Action } from "@/components/ui/action";
import { CATEGORIES } from "@/data/products";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center py-32">
      <div className="shell">
        <p className="label mb-6 text-accent">404</p>
        <h1 className="max-w-3xl font-display text-display-md">
          That page has been recycled.
        </h1>
        <p className="mt-6 max-w-lg text-base text-paper-muted">
          The link is broken or the page moved. Everything we stock is still one click away.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Action href="/" arrow>
            Back to home
          </Action>
          <Action href="/products" variant="outline">
            Browse products
          </Action>
        </div>

        <ul className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-8">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/products/${c.slug}`}
                className="text-sm text-paper-dim transition-colors hover:text-paper"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
