// Inyecta la fuente Montserrat como en tu sitio
CMS.registerPreviewStyle(
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
  { raw: false }
);
// Ya cargamos preview.css desde index.html, no es necesario repetir aquí.

// Utilidad para obtener valores del entry con fallback
function get(entry, path, fallback = "") {
  try {
    const parts = Array.isArray(path) ? path : String(path).split(".");
    return parts.reduce((acc, k) => (acc && acc.get ? acc.get(k) : acc[k]), entry.get("data")) || fallback;
  } catch {
    return fallback;
  }
}

/* ========= PÁGINAS ========= */
const PaginaPreview = ({ entry }) => {
  const titulo = get(entry, "title", "Título de la página");
  const body = entry.getIn(["data", "body"]) || "";

  return h(
    "div",
    {},
    // Header
    h("header", { className: "header" }, [
      h("div", { className: "logo" }, h("img", { src: "https://i.postimg.cc/bw6Z7QRk/IMG-5558.jpg" })),
      h("nav", { className: "nav" }, [
        h("a", {}, "SERVICIOS"),
        h("a", {}, "GALERÍA"),
        h("a", {}, "BARBEROS"),
        h("a", {}, "CONTACTO"),
        h("a", { className: "btn-cita" }, "RESERVAR AHORA"),
      ]),
    ]),
    // Hero
    h("section", { className: "hero", style: { backgroundImage: 'url("https://i.postimg.cc/zv5DbBj8/IMG-5592.jpg")' } },
      h("div", { className: "inner" }, [
        h("h1", {}, "DOMINA TU ESTILO."),
        h("p", {}, "Vista previa de la página (se muestra el contenido que estás editando abajo)."),
      ])
    ),
    // Contenido
    h("section", { className: "section" }, [
      h("h2", {}, titulo),
      h("div", { style: { marginTop: "15px", background: "#222", padding: "20px", borderRadius: "8px" } },
        h("div", { dangerouslySetInnerHTML: { __html: body } })
      ),
    ]),
    // Footer
    h("footer", { className: "footer" }, "© 2025 Duran's Barber Shop")
  );
};

/* ========= SERVICIOS ========= */
const ServicioPreview = ({ entry }) => {
  const title = get(entry, "title", "Nombre del servicio");
  const description = get(entry, "description", "Descripción del servicio");
  const price = get(entry, "price", "");

  return h("div", {}, [
    h("header", { className: "header" }, [
      h("div", { className: "logo" }, h("img", { src: "https://i.postimg.cc/bw6Z7QRk/IMG-5558.jpg" })),
      h("nav", { className: "nav" }, [
        h("a", {}, "SERVICIOS"), h("a", {}, "GALERÍA"), h("a", {}, "BARBEROS"), h("a", {}, "CONTACTO")
      ]),
    ]),
    h("section", { className: "section" }, [
      h("h2", {}, "Vista previa de Servicio"),
      h("div", { className: "services" }, [
        h("div", { className: "card" }, [
          h("div", { className: "service-icon" }, "✂️"),
          h("h3", {}, title.toUpperCase()),
          h("p", {}, description),
          price ? h("p", { style: { color: "#ffcc66", fontWeight: "bold" } }, price) : null,
        ]),
      ]),
    ]),
    h("footer", { className: "footer" }, "© 2025 Duran's Barber Shop"),
  ]);
};

/* ========= GALERÍA ========= */
const GaleriaPreview = ({ entry }) => {
  const title = get(entry, "title", "Título de la foto");
  const image = get(entry, "image", "https://i.postimg.cc/Njyt0mc4/IMG-5588.jpg");

  return h("div", {}, [
    h("header", { className: "header" }, [
      h("div", { className: "logo" }, h("img", { src: "https://i.postimg.cc/bw6Z7QRk/IMG-5558.jpg" })),
      h("nav", { className: "nav" }, [
        h("a", {}, "SERVICIOS"), h("a", {}, "GALERÍA"), h("a", {}, "BARBEROS"), h("a", {}, "CONTACTO")
      ]),
    ]),
    h("section", { className: "section" }, [
      h("h2", {}, "Vista previa de Galería"),
      h("div", { className: "gallery" }, [
        h("figure", {}, [
          h("img", { src: image, alt: title }),
          h("figcaption", { style: { textAlign: "center", marginTop: "8px" } }, title),
        ]),
      ]),
    ]),
    h("footer", { className: "footer" }, "© 2025 Duran's Barber Shop"),
  ]);
};

/* ========= EQUIPO ========= */
const EquipoPreview = ({ entry }) => {
  const name = get(entry, "name", "Nombre del barbero");
  const role = get(entry, "role", "Puesto");
  const description = get(entry, "description", "Descripción breve");
  const photo = get(entry, "photo", "https://i.postimg.cc/Njyt0mc4/IMG-5588.jpg");

  return h("div", {}, [
    h("header", { className: "header" }, [
      h("div", { className: "logo" }, h("img", { src: "https://i.postimg.cc/bw6Z7QRk/IMG-5558.jpg" })),
      h("nav", { className: "nav" }, [
        h("a", {}, "SERVICIOS"), h("a", {}, "GALERÍA"), h("a", {}, "BARBEROS"), h("a", {}, "CONTACTO")
      ]),
    ]),
    h("section", { className: "section" }, [
      h("h2", {}, "Vista previa de Equipo"),
      h("div", { className: "services" }, [
        h("div", { className: "card" }, [
          h("img", { src: photo, alt: name, style: { width: "100%", height: "220px", objectFit: "cover", borderRadius: "6px" } }),
          h("h3", {}, name.toUpperCase()),
          h("p", { style: { color: "#ffcc66", margin: 0 } }, role),
          h("p", {}, description),
        ]),
      ]),
    ]),
    h("footer", { className: "footer" }, "© 2025 Duran's Barber Shop"),
  ]);
};

/* === Registro en Decap CMS === */
CMS.registerPreviewTemplate("paginas", PaginaPreview);
CMS.registerPreviewTemplate("servicios", ServicioPreview);
CMS.registerPreviewTemplate("galeria", GaleriaPreview);
CMS.registerPreviewTemplate("equipo", EquipoPreview);
