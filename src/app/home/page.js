export default function HomePage(params) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="bg-sky-400 col-span-2 text-white p-4 rounded-2xl">
        <h2>Hello guys</h2>
      </div>
      <div className="bg-orange-400 text-white p-4 rounded-2xl row-span-4">
        Roadmap
      </div>
      <div className="rounded-2xl bg-teal-400 p-4 row-span-2">
        <p>Contacts</p>
      </div>
      <div className="rounded-2xl p-4 bg-yellow-300">Hobby</div>
      <div className="rounded-2xl p-4 bg-stone-500 text-white">Language</div>
    </div>
  );
}
