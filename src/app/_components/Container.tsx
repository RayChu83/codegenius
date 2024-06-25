export default function Container({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`md:py-10 py-5 px-5 ${className}`} id={id}>
      {children}{" "}
    </section>
  );
}
