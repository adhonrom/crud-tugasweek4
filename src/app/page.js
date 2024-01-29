import  TopicList  from "@/components/TopicList";

export const dynamic = 'force-dynamic'

async function getData(){
  const res = await fetch("https://v1.appbackend.io/v1/rows/Bu2ayk8udtHu");
  const data = await res.json();
  return data;
}




export default async function Home() {
const {data} = await getData();

  return (
    <div>
      <TopicList data={data} />
     
    </div>
  );
}
