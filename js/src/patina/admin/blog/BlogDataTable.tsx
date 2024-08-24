import { DataTable } from 'mantine-datatable'

type BlogRowType = {
  id: Number
  author: string
  title: string
  createTime: string
}

export function BlogDataTable({ records }: { records: BlogRowType[] }) {
  return (
    <DataTable
      columns={[
        { accessor: 'id' },
        { accessor: 'author' },
        { accessor: 'title' },
        { accessor: 'createTime' },
      ]}
      records={records}
    />
  )
}
