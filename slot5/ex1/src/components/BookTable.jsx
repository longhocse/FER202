function BookTable() {
  return (
    <section className="book-table py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">Book Your Table</h2>

        <div className="row g-3 mb-3">
          <div className="col-md-4">
            <input className="form-control" placeholder="Your Name *" />
          </div>
          <div className="col-md-4">
            <input className="form-control" placeholder="Your Email *" />
          </div>
          <div className="col-md-4">
            <select className="form-control">
              <option>Select a Service</option>
              <option>Dine In</option>
              <option>Take Away</option>
            </select>
          </div>
        </div>

        <textarea className="form-control mb-3" rows="4" placeholder="Please write your comment"></textarea>

        <div className="text-center">
          <button className="btn btn-warning px-4">Send Message</button>
        </div>
      </div>
    </section>
  );
}

export default BookTable;
