import { DataTable } from 'mantine-datatable'
import { EventEditActions } from './EventEditActions.tsx'

const PAGE_SIZES = [10, 20, 50]

type EventRowType = {
  id: number
  name: string
  message: string
  location: string
  date: string
}
type EventDataTableProps = {
  records: EventRowType[]
  total: number
  page: number
  setPage: any
  limit: number
  setLimit: any
}

export function EventDataTable({
  records,
  total,
  page,
  setPage,
  limit,
  setLimit,
}: EventDataTableProps) {
  return (
    <DataTable
      withTableBorder
      withColumnBorders
      columns={[
        { accessor: 'id' },
        { accessor: 'name' },
        { accessor: 'message' },
        { accessor: 'location' },
        { accessor: 'date' },
        {
          accessor: 'actions',
          title: 'Actions',
          width: '0%',
          render: (row) => (
            <EventEditActions eventID={row.id} eventName={row.name} />
          ),
        },
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
