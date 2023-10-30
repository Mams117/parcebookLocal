const Productos = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h1>Productos</h1>
      <hr />

      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar">
        <div className="btn-group" role="group" aria-label="Button Group">
          <button type="button" className="btn btn-primary">
            Button
          </button>
          <button type="button" className="btn btn-primary">
            Button
          </button>
          <button type="button" className="btn btn-primary">
            Button
          </button>
        </div>
        <div className="btn-group ms-3" role="group" aria-label="">
          <button type="button" className="btn btn-primary">
            Button
          </button>
          <button type="button" className="btn btn-primary">
            Button
          </button>
        </div>
      </div>
    </main>
  );
};

export default Productos;
