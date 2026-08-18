import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Acompañamiento VIP 30 Días — Truco del Bicarbonato";
const DESCRIPTION =
  "30 días de acompañamiento individual VIP por WhatsApp — apoyo en el período más crítico de tu proceso, por pago único de $29.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&family=Lato:wght@300;400;700&display=swap",
      },
    ],
  }),
  component: Index,
});

/** Cronograma de las 4 semanas críticas del acompañamiento. */
interface Week {
  readonly num: string;
  readonly label: string;
  readonly desc: string;
  readonly crisis?: boolean;
}

const WEEKS: readonly Week[] = [
  {
    num: "S1",
    label: "Semana 1 — Adaptación",
    desc: "El cuerpo está aprendiendo. Surgen dudas sobre horarios, ingredientes, proporciones. Es donde la mayoría improvisa mal por primera vez.",
  },
  {
    num: "S2",
    label: "Semana 2 — Resultado",
    desc: 'El plan empieza a funcionar. La ropa queda más holgada. Pero aparece la duda: "¿puedo acelerar? ¿puedo cambiar algo?"',
  },
  {
    num: "S3",
    label: "Semana 3 — Crisis",
    desc: "La vida real aparece. La rutina cambia, la báscula se detiene, la motivación cae. Aquí es donde el 75% de las mujeres abandona — sin tener a nadie que responda en ese momento exacto.",
    crisis: true,
  },
  {
    num: "S4",
    label: "Semana 4 — Decisión",
    desc: "Quien pasó la semana 3 con apoyo llega aquí más fuerte. Quien la pasó sola, muchas veces ya abandonó.",
  },
];

const SIN_APOYO: readonly string[] = [
  "Duda en la semana 3 sin respuesta",
  "Decisión equivocada en el mal momento",
  "Pierde el ritmo y no lo retoma",
  'Abandona creyendo que "no es para ella"',
];

const CON_VIP: readonly string[] = [
  "Respuesta en minutos, a cualquier hora",
  "Ajuste rápido y sigue en el camino",
  "Pasa la semana 3 sin detenerse",
  "Llega al mes 2 con resultado visible",
];

const INCLUSO: readonly string[] = [
  "Contacto directo en WhatsApp por 30 días completos",
  "Yo y mi equipo respondemos — sin cola, sin espera",
  "Apoyo sobre el Truco del Bicarbonato y todo lo que surja",
  "Cualquier horario, las veces que sea necesario",
];

const UPSELL_URL = "https://pleniaapp.com/";

function Index() {
  return (
    <div className="vip-page">
      {/* TOPO */}
      <div className="topo-contexto">
        Espera — antes de irte, tengo <strong>una propuesta más pequeña para ti.</strong>
      </div>

      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">Opción de entrada — 30 días</div>
          <h1>
            Entiendo que 90 días
            <br />
            puede parecer más de lo que
            <br />
            necesitas <em>ahora mismo.</em>
          </h1>
          <p className="hero-sub">
            Entonces déjame proponerte algo menor —
            <br />
            <strong>solo para el período más crítico de tu proceso.</strong>
          </p>
        </div>
      </div>

      {/* JUSTIFICACIÓN 30 DÍAS */}
      <section>
        <div className="wrap">
          <h2 className="sec-title">
            Por qué los <em>primeros 30 días</em> son el período más decisivo
          </h2>
          <div className="copy">
            <p>
              Los 90 días existen porque es el tiempo completo de la transformación. Pero sé
              exactamente dónde se estanca la mayoría de las mujeres.
            </p>
            <p>No es en el mes 2. No es en el mes 3.</p>
            <p>
              <strong>Es en las primeras 4 semanas.</strong> Y hay una razón muy específica para
              eso:
            </p>
          </div>

          <ul className="timeline" style={{ marginTop: 28 }}>
            {WEEKS.map((week) => (
              <li key={week.num}>
                <div className={week.crisis ? "week-num crisis" : "week-num"}>{week.num}</div>
                <div className="week-content">
                  <span className={week.crisis ? "week-label crisis" : "week-label"}>
                    {week.label}
                    {week.crisis ? <span className="crisis-badge">⚠ punto crítico</span> : null}
                  </span>
                  <span className="week-desc">{week.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 32 }} className="copy">
            <p>
              Si atraviesas esas 4 semanas con alguien que responda en el momento correcto, las
              probabilidades de llegar al resultado son mucho mayores.
            </p>
            <p>
              <strong>Eso es exactamente lo que garantiza el acompañamiento de 30 días.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section style={{ background: "#E8FBF4" }}>
        <div className="wrap">
          <h2 className="sec-title">La diferencia que hace</h2>
          <div className="comparativo">
            <div className="comp-card sin">
              <h4>Sin apoyo</h4>
              <ul>
                {SIN_APOYO.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="comp-card con">
              <h4>Con 30 días VIP</h4>
              <ul>
                {CON_VIP.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section>
        <div className="wrap">
          <div className="oferta-box">
            <div className="oferta-tag">Tu oferta de entrada</div>
            <h3>
              30 días de <em>Acompañamiento Individual VIP</em>
            </h3>
            <p className="desc">
              El mismo contacto directo en WhatsApp — yo y mi equipo respondiendo tus dudas, sin
              cola, sin espera.
              <br />
              <br />
              <strong>Solo el período más crítico. Solo lo que realmente necesitas ahora.</strong>
            </p>

            <ul className="incluso-list">
              {INCLUSO.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="no-incluso">
              * Sin los bonos digitales de la versión de 90 días · Sin los 60 días adicionales
            </p>

            <div className="preco-ds">
              <div className="de">De $57 (versión completa de 90 días)</div>
              <div className="por-label">Hoy, solo aquí</div>
              <div className="valor">
                <sup>$</sup>29
              </div>
              <div className="detalhe">
                pago único · <strong>menos de $1 al día</strong> durante los 30 días más críticos
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <a href={UPSELL_URL} className="btn-upsell" style={{ display: "inline-block" }}>
                ¡SÍ — Quiero el Acompañamiento VIP!
              </a>
              <div className="decline-inline">
                <a href={UPSELL_URL} style={{ color: "inherit" }}>
                  No, gracias
                </a>
              </div>
            </div>
          </div>

          <div className="garantia-mini">
            <div className="icon" aria-hidden="true">
              🛡️
            </div>
            <div>
              <h4>Garantía de 30 días — sin preguntas</h4>
              <p>
                Si sientes que no valió la pena, mándame un mensaje y te devuelvo todo. Sin
                trámites. Sin preguntas. El riesgo es completamente mío.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
