type CustomHeaderProps = {
  title: string;
  subtitle?: string;
};
export function CustomHeader({ title, subtitle }: CustomHeaderProps) {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
