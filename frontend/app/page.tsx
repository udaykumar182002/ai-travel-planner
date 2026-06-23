import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        AI Travel Planner
      </h1>

      <div className="flex gap-4">
        <Link
          href="/register"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Register
        </Link>

        <Link
          href="/login"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Login
        </Link>

        <Link
          href="/dashboard"
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Dashboard
        </Link>

        <Link
          href="/create-trip"
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          Create Trip
        </Link>
      </div>
    </div>
  );
}