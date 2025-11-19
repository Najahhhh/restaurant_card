import React from "react";

// Single-file React app (App.jsx) for Restaurant Menu Website
// Drop this file into a Vite React project as src/App.jsx (or src/main/App.jsx) and run the project.

function MenuItem({ name, category, price, description, isVegetarian }) {
  return (
    <article className="menu-card" role="article">
      <div className="menu-card-header">
        <h3 className="menu-name">{name}</h3>
        {isVegetarian && <span className="veg-badge">Vegetarian</span>}
      </div>

      <p className="menu-category">{category}</p>
      <p className="menu-desc">{description}</p>
      <div className="menu-footer">
        <span className="menu-price">₹{price.toFixed ? price.toFixed(2) : price}</span>
      </div>
    </article>
  );
}

export default function App() {
  // Data arrays (can be moved to a separate file if desired)
  const mainCourses = [
    {
      name: "Butter Chicken",
      category: "Main Course",
      price: 420,
      description: "Tender chicken simmered in a creamy tomato sauce served with naan.",
      isVegetarian: false,
    },
    {
      name: "Paneer Tikka Masala",
      category: "Main Course",
      price: 360,
      description: "Charred paneer cubes in a rich, spiced tomato gravy.",
      isVegetarian: true,
    },
    {
      name: "Grilled Salmon",
      category: "Main Course",
      price: 520,
      description: "Fresh salmon fillet grilled and glazed with lemon butter.",
      isVegetarian: false,
    },
    {
      name: "Mushroom Risotto",
      category: "Main Course",
      price: 380,
      description: "Creamy arborio rice cooked with wild mushrooms and parmesan.",
      isVegetarian: true,
    },
  ];

  const desserts = [
    {
      name: "Gulab Jamun",
      category: "Dessert",
      price: 120,
      description: "Soft milk dumplings soaked in saffron-cardamom syrup.",
      isVegetarian: true,
    },
    {
      name: "Chocolate Lava Cake",
      category: "Dessert",
      price: 170,
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
      isVegetarian: true,
    },
    {
      name: "Kulfi Falooda",
      category: "Dessert",
      price: 150,
      description: "Traditional Indian ice cream layered with rose syrup and vermicelli.",
      isVegetarian: true,
    },
  ];

  const totalItems = mainCourses.length + desserts.length;
  const currentYear = new Date().getFullYear();

  return (
    <div className="app-root">
      {/* Embedded styles for single-file convenience. In a real project move to App.css */}
      <style>{`
        :root{ --accent:#d97706; --bg:#f6f7fb; --card:#ffffff; --muted:#6b7280; --green:#16a34a; }
        *{box-sizing:border-box}
        body,html,#root{height:100%}
        .app-root{
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
          background: linear-gradient(180deg, var(--bg) 0%, #ffffff 100%);
          padding:32px;
          min-height:100vh;
          color:#111827;
        }

        header.site-header{
          display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:24px;
        }
        .brand{
          display:flex;flex-direction:column;
        }
        .brand h1{font-size:28px;margin:0}
        .brand p{margin:4px 0 0;color:var(--muted)}

        .restaurant-info{
          background:var(--card);padding:12px 16px;border-radius:12px;box-shadow:0 6px 18px rgba(15,23,42,0.06);
          text-align:right;
        }
        .restaurant-info p{margin:2px 0;color:var(--muted);font-size:14px}

        main{
          display:grid;grid-template-columns:1fr 360px;gap:24px;align-items:start;
        }

        .menu-section{
          background:transparent;padding:8px 0;
        }
        .section-heading{font-size:20px;margin:12px 0}

        .menu-grid{
          display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;
        }

        .menu-card{
          background:var(--card);padding:14px;border-radius:12px;box-shadow:0 6px 18px rgba(15,23,42,0.06);
          display:flex;flex-direction:column;gap:8px;
        }
        .menu-card-header{display:flex;align-items:center;justify-content:space-between;gap:8px}
        .menu-name{margin:0;font-size:18px}
        .veg-badge{background:rgba(22,163,74,0.12);color:var(--green);border:1px solid rgba(22,163,74,0.18);padding:4px 8px;border-radius:999px;font-weight:600;font-size:12px}
        .menu-category{font-size:13px;color:var(--muted)}
        .menu-desc{font-size:14px;color:#374151;margin:6px 0}
        .menu-footer{display:flex;justify-content:space-between;align-items:center}
        .menu-price{font-weight:700}

        aside.side-panel{background:var(--card);padding:16px;border-radius:12px;box-shadow:0 6px 18px rgba(15,23,42,0.06)}
        .side-panel h4{margin:0 0 8px 0}
        .meta{color:var(--muted);font-size:14px;margin-bottom:8px}

        footer.site-footer{margin-top:24px;display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid #e6e9ef}
        footer a{color:var(--accent);text-decoration:none}

        /* Responsive */
        @media (max-width: 880px){
          main{grid-template-columns:1fr}
          .restaurant-info{text-align:left}
        }
      `}</style>

      <header className="site-header">
        <div className="brand">
          <h1>Spice & Soul</h1>
          <p>Delicious Food, Made Fresh Daily</p>
        </div>

        <div className="restaurant-info" aria-label="Restaurant information">
          <p><strong>Open Daily:</strong> 11 AM - 10 PM</p>
          <p><strong>Contact:</strong> +91 98765 43210</p>
        </div>
      </header>

      <main>
        <section className="menu-section">
          <div className="section-heading">Main Courses</div>
          <div className="menu-grid" role="list">
            {mainCourses.map((item, idx) => (
              <MenuItem
                key={`main-${idx}-${item.name.replace(/\s+/g, "-")}`}
                name={item.name}
                category={item.category}
                price={item.price}
                description={item.description}
                isVegetarian={item.isVegetarian}
              />
            ))}
          </div>

          <div style={{ height: 18 }} />

          <div className="section-heading">Desserts</div>
          <div className="menu-grid" role="list">
            {desserts.map((item, idx) => (
              <MenuItem
                key={`dessert-${idx}-${item.name.replace(/\s+/g, "-")}`}
                name={item.name}
                category={item.category}
                price={item.price}
                description={item.description}
                isVegetarian={item.isVegetarian}
              />
            ))}
          </div>
        </section>

        <aside className="side-panel">
          <h4>Restaurant Info</h4>
          <p className="meta">Total items on menu: <strong>{totalItems}</strong></p>
          <p className="meta">Hours: <strong>Open Daily: 11 AM - 10 PM</strong></p>
          <p className="meta">Address: 42 Curry Lane, Foodie Nagar, Mumbai</p>

          <div style={{ height: 12 }} />

          <h4>Contact</h4>
          <p className="meta">Phone: +91 98765 43210</p>
          <p className="meta">Email: hello@spiceandsoul.example</p>
        </aside>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Spice & Soul</strong>
          <div style={{ color: "var(--muted)", marginTop: 4 }}>Email: <a href="mailto:hello@spiceandsoul.example">hello@spiceandsoul.example</a></div>
        </div>
        <div style={{ color: "var(--muted)" }}>© {currentYear} Spice & Soul</div>
      </footer>
    </div>
  );
}
