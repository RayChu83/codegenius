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
    <section className={`py-10 ${className}`} id={id}>
      {children}{" "}
    </section>
  );
}
