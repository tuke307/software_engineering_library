import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medium erstellen",
};

export default function MediaCreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
    <div className="">
      {children}
    </div>
  </section>
  );
}
