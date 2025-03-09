function Tag({
  color,
  children,
}: {
  color: "green" | "red";
  children: React.ReactNode;
}) {
  //  text-green-400 bg-green-400/20
  //  text-red-400 bg-red-400/20
  return (
    <div
      className={`rounded-[2px] uppercase bg-${color}-400/20 font-light tracking-wide text-${color}-400 px-2 py-1 text-xs`}
    >
      {children}
    </div>
  );
}

export default Tag;
