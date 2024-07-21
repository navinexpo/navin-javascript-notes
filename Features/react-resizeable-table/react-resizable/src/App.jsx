/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import { useTable } from 'react-table';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ResizableHeader = ({ column, ...props }) => {
  const handleResize = (e, { size }) => {
    column.setWidth(size.width);
  };

  return (
    <Resizable width={column.width} height={0} onResize={handleResize}>
      <div {...props} style={{ ...props.style, width: column.width }}>
        {props.children}
      </div>
    </Resizable>
  );
};

const Table = ({ columns, data }) => {
  const defaultColumn = useMemo(
    () => ({
      width: 150,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    defaultColumn,
  });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
              key={headerGroup.id}
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                <ResizableHeader column={column}>
                  {column.render('Header')}
                </ResizableHeader>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr key={row.id} {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                  key={row.id}
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const App = () => {
  const data = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        col3: 'React',
        col4: 'Table with resizable columns',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: '!',
        col4: 'Another long content that needs resizing',
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'to put here',
        col4: 'Yet another long content that should fit in',
      },
      {
        col1: 'make sure',
        col2: 'it works',
        col3: 'correctly',
        col4: 'Last content to test resizing feature',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
      {
        Header: 'Column 3',
        accessor: 'col3',
      },
      {
        Header: 'Column 4',
        accessor: 'col4',
        width: 300, // Initial width of the resizable column
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};

export default App;
