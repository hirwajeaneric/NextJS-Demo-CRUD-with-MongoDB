import { Button } from "@/components/ui/button"
import Link from "next/link"
import BlogsTable from "./_components/BlogsTable"

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold md:text-2xl">Blogs</h1>
        <Button>
          <Link href="/dashboard/blogs/new">
            Add New
          </Link>
        </Button>
      </div>
      <div className="flex flex-1 w-full items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
        <BlogsTable />
      </div>
    </div>
  )
}

export default page