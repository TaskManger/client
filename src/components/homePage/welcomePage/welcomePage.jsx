
const WelcomePage = () => {
  const user = "You";
  return (
    <div className="w-full bg-transparent h-auto pt-4 text-blue-950">

      <div>
        <h1 className="text-lg ">
          <span className="text-3xl">Welcome </span>
          <span className="text-3xl">{user},</span>
          <br />
          <span className="text-2xl">To the</span>
        </h1>
      </div>
      <div className="mt-1">
        <div className="text-2xl">Project...</div>
        <div className="text-2xl mt-2">Management</div>
        <div className="text-2xl mt-2">System.</div>
      </div>
      <></>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="border p-4 rounded-lg shadow-lg bg-blue-300">
        <h2 className="text-2xl font-bold mb-2">Feature One</h2>
        <p className="text-lg">Discover the amazing benefits of our first feature.</p>
      </div>
      <div className="border p-4 rounded-lg shadow-lg bg-blue-300">
        <h2 className="text-2xl font-bold mb-2">Feature Two</h2>
        <p className="text-lg">Learn how our second feature can help you achieve more.</p>
      </div>
      <div className="border p-4 rounded-lg shadow-lg bg-blue-300">
        <h2 className="text-2xl font-bold mb-2">Feature Three</h2>
        <p className="text-lg">Explore the advantages of our third feature.</p>
      </div>
    </div>
    </div>
  );
};

export default WelcomePage;
