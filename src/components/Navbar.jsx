import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center rounded-lg bg-black px-8 py-3">
        <Link href={"/"}>
          <img src="/icon.png" height={"30"} width={"30"} alt="logodev" />
        </Link>
        <Link className="text-white px-2 font-medium" href={"/"}>
          DevScale Learning Journey..
        </Link>

        <Link
          className="bg-white p-2 justify-end rounded-md font-medium text-black hover:bg-black border hover:border-white hover:text-white"
          href={"/addTopic"}
        >
          ➕ Add Topic
        </Link>
      </div>
    </div>
  );
}
