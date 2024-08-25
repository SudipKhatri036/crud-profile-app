function Table({ children, isFullPage }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            {isFullPage ? <th>DOB</th> : <th>Actions</th>}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default Table;
