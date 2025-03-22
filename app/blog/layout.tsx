export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mt-16 mb-16 sm:mt-32 sm:mb-32 grid gap-6 sm:gap-12 grid place-content-center pt-4">
        {children}
      </div>
    </>
  );
}