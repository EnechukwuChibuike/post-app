import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <section className="grid justify-items-center gap-5 content-center h-fit w-fit py-10 px-5 shadow-2xl border-[0.5px] border-black/40">
        <h1 className="text-2xl font-bold">Welcome To Post App</h1>

        <Link href="/create-post">
          <button className="bg-blue-600 text-white px-5 py-2 hover:bg-blue-700">
            Create Post
          </button>
        </Link>
      </section>
    </main>
  );
}
