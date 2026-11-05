export default function Loading() {
  return (
    <div className="flex min-h-40 items-center justify-center">
      <div
        className="
          size-10 animate-spin rounded-full
          border-4 border-gray-200 border-t-black
        "
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
