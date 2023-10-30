const Clientes = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h1>Clientes</h1>
      <hr />
      <div class="table-responsive">
        <table class="table table-primary">
          <thead>
            <tr>
              <th scope="col">Column 1</th>
              <th scope="col">Column 2</th>
              <th scope="col">Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td scope="row">R1C1</td>
              <td>R1C2</td>
              <td>R1C3</td>
            </tr>
            <tr class="">
              <td scope="row">Item</td>
              <td>Item</td>
              <td>Item</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">This is the first item's accordion body.</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Clientes;
