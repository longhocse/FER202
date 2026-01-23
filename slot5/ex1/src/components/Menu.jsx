import menuData from '../data/menuData';

function Menu() {
  return (
    <section className="menu-section py-5 bg-dark">
      <div className="container">
        <h2 className="text-center text-white mb-4">Our Menu</h2>

        <div className="row g-4">
          {menuData.map((item) => (
            <div className="col-lg-3 col-md-6 col-12" key={item.id}>
              <div className="card h-100 position-relative">

                {item.tag && (
                  <span
                    className={`badge position-absolute top-0 start-0 m-2 ${
                      item.tag === 'SALE' ? 'bg-warning' : 'bg-success'
                    }`}
                  >
                    {item.tag}
                  </span>
                )}

                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />

                <div className="card-body text-center">
                  <h5>{item.title}</h5>

                  <p>
                    {item.oldPrice && (
                      <span className="text-muted text-decoration-line-through me-2">
                        ${item.oldPrice}
                      </span>
                    )}
                    <span className="fw-bold">${item.price}</span>
                  </p>

                  <button className="btn btn-dark w-100">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Menu;
