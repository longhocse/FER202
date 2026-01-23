function Contact() {
  return (
    <div className="container py-5 text-white">
      <h1 className="mb-4 text-center">Contact Us</h1>

      <div className="row">
        {/* Thông tin liên hệ */}
        <div className="col-md-6 mb-4">
          <h4>Pizza House</h4>
          <p>📍 123 Pizza Street, Italy</p>
          <p>📞 +39 012 345 6789</p>
          <p>✉️ pizzahouse@email.com</p>
        </div>

        {/* Form liên hệ */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>

            <button className="btn btn-danger w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
