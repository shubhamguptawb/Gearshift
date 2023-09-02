import { getDocumentListFromFirebase } from '@/lib/api'
import Home from '@/modules/home'
async function getData() {
  const res = await getDocumentListFromFirebase('companies')
  if (!res.success) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.data
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      {/* <Home companies={data} /> */}
    </div>
  );
}
