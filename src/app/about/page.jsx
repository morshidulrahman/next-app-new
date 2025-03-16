import { getAllPost } from "@/lib/getPost";

const page = async () => {
  const data = await getAllPost();

  console.log(data);

  return (
    <div>
      <div>
        {data.map((e) => (
          <h1
            className="text-red-500 bg-gray-400 py-3 rounded-md px-2 mb-5"
            key={e._id}
          >
            {e.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default page;
