const type = "website";
const url = "https://joansolano.herokuapp.com";
const title = "Joan Solano";
const description = "Sitio web personal acerca de Joan Solano, estudiante de ingeniería mecatrónica en la Universidad EIA y escritor de críticas";
const mainImage = "/logo_joansolano.png";

export default (meta) => {
    return [
      {
        hid: "description",
        name: "description",
        content: (meta && meta.description) || description,
      },
      {
        hid: "og:type",
        property: "og:type",
        content: (meta && meta.type) || type,
      },
      {
        hid: "og:url",
        property: "og:url",
        content: (meta && meta.url) || url,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: (meta && meta.title) || title,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: (meta && meta.description) || description,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: (meta && meta.mainImage) || mainImage,
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: (meta && meta.url) || url,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: (meta && meta.title) || title,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: (meta && meta.description) || description,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: (meta && meta.mainImage) || mainImage,
      },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: (meta && meta.title) || title,
      }
    ];
  };