const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function langTest() {
  // List of Urls
  const urls = [
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-de-credito/tarjeta-standard.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-de-credito/tarjeta-gold.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-de-credito/tarjeta-platinum.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-de-credito/tarjeta-world-elite.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-de-debito.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-de-debito/tarjeta-standard.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-de-debito/tarjeta-gold.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-de-debito/tarjeta-platinum.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-de-debito/tarjeta-world-elite.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-prepago.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-prepago/tarjeta-standard.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-prepago/tarjeta-viajes.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-prepago/tarjeta-regalo.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/conozca-nuestras-ofertas-y-promociones.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/conozca-nuestras-ofertas-y-promociones/priceless-with-estoril.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/conozca-nuestras-ofertas-y-promociones/priceless-specials.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/conozca-nuestras-ofertas-y-promociones/priceless-specials/terminos-y-condiciones.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/conozca-nuestras-ofertas-y-promociones/cinepolis-click-to-pay.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/conozca-nuestras-ofertas-y-promociones/mueve-ciudad-click-to-pay.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/beneficios.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/beneficios/cinepolis.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/beneficios/uber-one.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/beneficios/alsea.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/beneficios/mercado-libre.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/formas-de-pago.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/formas-de-pago/chip.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/formas-de-pago/secure-code.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/formas-de-pago/contactless.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/formas-de-pago/samsung-pay.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/formas-de-pago/apple-pay.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/formas-de-pago/identity-check.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/formas-de-pago/proteccion-digital-mastercard.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/formas-de-pago/click-to-pay.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/soporte.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/soporte/id-theft-protection.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/soporte/localiza-un-cajero-automatico.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/soporte/convertidor-moneda.html",
    "https://www.mastercard.com.mx/es-mx/consumidores/soporte/terminos-de-uso-responsabilidad-cero.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/tarjetas.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/tarjetas/business-credit-card.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/tarjetas/business-prepaid-card.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/tarjetas/business-debit-card.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/tarjetas/micro-business-card.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/tarjetas/business-world-elite.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/tarjetas/business-executive-card.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/comienza-a-aceptar.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/comienza-a-aceptar/beneficios-de-aceptar-mastercard.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/comienza-a-aceptar/encontrar-facilitadores-de-pago.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/easy-savings-specials.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/seguridad.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/seguridad/chip-emv.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/seguridad/secure-code.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/seguridad/requisitos.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/seguridad/requisitos/proteccion-de-datos-del-sito-y-pci.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/soporte.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/soporte/intercambio.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/crezca-su-negocio.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/crezca-su-negocio/contactless.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/crezca-su-negocio/atraer-los-clientes.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/crezca-su-negocio/smart-data.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/ciberseguridad.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/ciberseguridad/trust-center.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/ciberseguridad/trust-center/proteccion-y-seguridad.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/ciberseguridad/trust-center/aprende-los-fundamentos-basicos.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/ciberseguridad/trust-center/control-de-su-seguridad.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/ciberseguridad/trust-center/recursos-y-soluciones.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/soluciones.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/click-to-pay.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/digital-security.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/criptomonedas-y-blockchain.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/criptomonedas-y-blockchain/programa-de-tarjetas-cripto.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-pequenas-medianas/criptomonedas-y-blockchain/monedas-digitales-de-los-bancos-centrales.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-grandes.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-grandes/tarjetas.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-grandes/tarjetas/corporate.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-grandes/tarjetas/corporate-world-elite.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-grandes/tarjetas/corporate-executive.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-grandes/tarjetas/corporate-purchasing.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-grandes/seguridad.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-grandes/soluciones-de-pago.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-grandes/soluciones-de-pago/central-travel-solution.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-grandes/soluciones-de-pago/programa-para-empresas-multinacionales.html",
    "https://www.mastercard.com.mx/es-mx/empresas/empresas-grandes/soluciones-de-pago/tabla-de-rango-de-cuenta-bin-simplificada.html",
    "https://www.mastercard.com.mx/es-mx/empresas/centro-de-innovacion-para-adquirentes.html",
    "https://www.mastercard.com.mx/es-mx/empresas/centro-de-innovacion-para-adquirentes/experiencias.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/compromiso-privacidad.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/compromiso-privacidad/privacidad.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/compromiso-privacidad/privacidad/fraud-security-privacy.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/compromiso-privacidad/data-analytics-opt-out.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/compromiso-privacidad/email-opt-out.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/responsabilidad-datos.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/sustentabilidad-social.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/sustentabilidad-social/mastercard-lab-para-la-inclusion-financiera.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/sustentabilidad-social/voluntariado-y-filantropia-corporativa.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/sustentabilidad-social/voluntariado-y-filantropia-corporativa/girls-4-tech.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/sustentabilidad-social/desarrollo-internacional.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/sustentabilidad-social/declaracion-derechos-humanos.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/sustentabilidad-social/postura-esclavitud-moderna-trafico-humano.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/priceless-planet.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/sustentabilidad-ambiental.html",
    "https://www.mastercard.com.mx/es-mx/vision/una-compania-responsable/gobernanza.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/innovacion.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/terminos-de-uso.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/terminos-de-uso/politica-anti-pirateria.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/terminos-de-uso/aviso-fraude-seguridad.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/terminos-de-uso/marcas-registradas-us.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/terminos-de-uso/loyalty-notice.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/comite-gerencial.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/empleos.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/diversidad-inclusion.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/diversidad-proveedores.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/ubicaciones-globales.html",
  ];

  //esta lista no esta usada
  let urlsBodySitemap = [];

  // Launch browser
  let driver = await new Builder().forBrowser("chrome").build();

  // Iterate URLs
  for (let url of urls) {
    // Navigate to Page
    await driver.get(url);

    // Get page source
    let pageSource = await driver.getPageSource();

    // Extract lang attribute
    let language = pageSource.match(/html lang="([\w-]+)"/)[1];

    // Print output
    console.log(url, "-", language);
  }
  await driver.quit();
}

langTest();
