function BlurCircle({ top, left, right, className = "" }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl bg-primary/30 w-72 h-72 ${className}`}
      style={{ top, left, right }}
    />
  );
}

export default BlurCircle;