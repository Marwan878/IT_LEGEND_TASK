import { Breadcrumbs } from "@/components/course";

export default function Header() {
  return (
    <header className="bg-[#f5f5f5]">
      <div className="page-container py-4">
        <Breadcrumbs />
        <h1 className="font-bold text-2xl xl:text-3xl">
          Starting SEO as your Home Based Buisness
        </h1>
      </div>
    </header>
  );
}
