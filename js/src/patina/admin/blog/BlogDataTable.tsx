import { DataTable } from 'mantine-datatable'

const PAGE_SIZES = [10, 15, 20]

type BlogRowType = {
  id: number
  author: string
  title: string
  createTime: string
}
type BlogDataTableProps = {
  records: BlogRowType[]
  total: number
  page: number
  setPage: any
  limit: number
  setLimit: any
}
export function BlogDataTable({
  records,
  total,
  page,
  setPage,
  limit,
  setLimit,
}: BlogDataTableProps) {
  return (
    <DataTable
      withTableBorder
      withColumnBorders
      columns={[
        { accessor: 'id' },
        { accessor: 'author' },
        { accessor: 'title' },
        { accessor: 'createTime' },
      ]}
      records={records}
      totalRecords={total}
      recordsPerPage={limit}
      page={page}
      onPageChange={(p) => setPage(p)}
      recordsPerPageOptions={PAGE_SIZES}
      onRecordsPerPageChange={setLimit}
    />
  )
}
