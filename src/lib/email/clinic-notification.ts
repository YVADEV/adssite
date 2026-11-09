import { CLINIC } from "@/lib/contact";

export const EMAIL_THEME = {
  outer: "#0B0B0B",
  card: "#151515",
  inner: "#202020",
  lime: "#B3BB4A",
  text: "#FFFFFF",
  muted: "#A3A3A3",
  divider: "#343434",
} as const;

export type ClinicNotificationFields = {
  fullName?: string;
  phone?: string;
  email?: string;
  preferredDate?: string;
  service?: string;
  message?: string;
  source?: string;
  pageUrl?: string;
};

const FONT_UI = "Arial, Helvetica, sans-serif";
const FONT_DISPLAY = "Georgia, 'Times New Roman', Times, serif";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function present(value: string | undefined) {
  const trimmed = value?.trim() ?? "";
  return trimmed.length ? trimmed : undefined;
}

export function formatPreferredDateLabel(value: string) {
  const trimmed = value.trim();
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (iso) return `${iso[3]}.${iso[2]}.${iso[1]}`;
  return trimmed;
}

export function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 6) return "";
  if (digits.startsWith("00")) return `tel:+${digits.slice(2)}`;
  if (digits.startsWith("40")) return `tel:+${digits}`;
  if (digits.startsWith("0")) return `tel:+4${digits}`;
  return `tel:+${digits}`;
}

function detailRows(fields: ClinicNotificationFields) {
  const rows: { label: string; value: string; href?: string }[] = [];
  const fullName = present(fields.fullName);
  const phone = present(fields.phone);
  const email = present(fields.email);
  const preferredDate = present(fields.preferredDate);
  const service = present(fields.service);
  const message = present(fields.message);
  const source = present(fields.source);
  const pageUrl = present(fields.pageUrl);

  if (fullName) rows.push({ label: "Pacient", value: fullName });
  if (phone) {
    const href = telHref(phone);
    rows.push({ label: "Telefon", value: phone, href: href || undefined });
  }
  if (email) rows.push({ label: "Email", value: email, href: `mailto:${email}` });
  if (preferredDate) rows.push({ label: "Data preferată", value: formatPreferredDateLabel(preferredDate) });
  if (service) rows.push({ label: "Serviciu", value: service });
  if (message) rows.push({ label: "Mesaj", value: message });
  if (source) rows.push({ label: "Sursă", value: source });
  if (pageUrl) rows.push({ label: "Pagină", value: pageUrl, href: pageUrl });
  return rows;
}

function rowHtml(label: string, value: string, href: string | undefined, last: boolean) {
  const safeLabel = escapeHtml(label);
  const safeValue = escapeHtml(value).replace(/\n/g, "<br/>");
  const display = href
    ? `<a href="${escapeHtml(href)}" style="color:${EMAIL_THEME.text};text-decoration:none;">${safeValue}</a>`
    : safeValue;
  const border = last ? "none" : `1px solid ${EMAIL_THEME.divider}`;
  return `<tr>
    <td style="padding:16px 0;border-bottom:${border};">
      <p style="margin:0 0 6px 0;font-family:${FONT_UI};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${EMAIL_THEME.muted};">${safeLabel}</p>
      <p style="margin:0;font-family:${FONT_UI};font-size:16px;line-height:1.45;color:${EMAIL_THEME.text};">${display}</p>
    </td>
  </tr>`;
}

export function clinicNotificationSubject(fields: ClinicNotificationFields) {
  const name = present(fields.fullName);
  return name ? `Solicitare nouă de programare · ${name}` : "Solicitare nouă de programare";
}

export function buildClinicNotificationText(fields: ClinicNotificationFields) {
  const lines = [
    "ALVERNA DENTAL STUDIO",
    "Solicitare nouă de programare",
    "ÎN AȘTEPTAREA CONFIRMĂRII",
    "",
  ];
  for (const row of detailRows(fields)) {
    lines.push(`${row.label}: ${row.value}`);
  }
  const phone = present(fields.phone);
  if (phone) {
    lines.push("", "Contactați pacientul:", telHref(phone) || phone);
  }
  lines.push("", CLINIC.addressShort, CLINIC.websiteDisplay);
  return lines.join("\n");
}

export function buildClinicNotificationHtml(fields: ClinicNotificationFields) {
  const rows = detailRows(fields);
  const phone = present(fields.phone);
  const callHref = phone ? telHref(phone) : "";
  const details = rows
    .map((row, index) => rowHtml(row.label, row.value, row.href, index === rows.length - 1))
    .join("");

  const action = callHref
    ? `<tr>
        <td style="padding:28px 32px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${EMAIL_THEME.lime};background-color:${EMAIL_THEME.inner};">
            <tr>
              <td style="padding:22px 24px 10px;">
                <p style="margin:0 0 8px 0;font-family:${FONT_UI};font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${EMAIL_THEME.lime};">Următorul pas</p>
                <p style="margin:0;font-family:${FONT_UI};font-size:14px;line-height:1.5;color:${EMAIL_THEME.muted};">Confirmați solicitarea telefonic. Data din formular este o preferință, nu o programare confirmată.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px 24px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td bgcolor="${EMAIL_THEME.lime}" style="background-color:${EMAIL_THEME.lime};">
                      <a href="${escapeHtml(callHref)}" style="display:inline-block;padding:14px 28px;font-family:${FONT_UI};font-size:14px;font-weight:bold;letter-spacing:0.04em;text-decoration:none;color:${EMAIL_THEME.outer};">Contactați pacientul</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>Solicitare nouă de programare</title>
</head>
<body style="margin:0;padding:0;background-color:${EMAIL_THEME.outer};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${EMAIL_THEME.outer}" style="background-color:${EMAIL_THEME.outer};">
    <tr>
      <td align="center" style="padding:36px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" bgcolor="${EMAIL_THEME.card}" style="width:600px;max-width:600px;background-color:${EMAIL_THEME.card};">
          <tr>
            <td bgcolor="${EMAIL_THEME.outer}" style="padding:28px 32px 22px;background-color:${EMAIL_THEME.outer};border-bottom:1px solid ${EMAIL_THEME.divider};">
              <p style="margin:0;font-family:${FONT_UI};font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:${EMAIL_THEME.lime};">Alverna Dental Studio</p>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 32px 8px;">
              <h1 style="margin:0;font-family:${FONT_DISPLAY};font-size:32px;line-height:1.15;font-weight:normal;color:${EMAIL_THEME.text};">Solicitare nouă de programare</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 12px;">
              <p style="margin:0;font-family:${FONT_UI};font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${EMAIL_THEME.lime};">ÎN AȘTEPTAREA CONFIRMĂRII</p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 32px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${EMAIL_THEME.inner}" style="background-color:${EMAIL_THEME.inner};">
                <tr>
                  <td style="padding:8px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${details}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ${action}
          <tr>
            <td style="padding:32px 32px 36px;">
              <p style="margin:0;font-family:${FONT_UI};font-size:12px;line-height:1.6;color:${EMAIL_THEME.muted};">${escapeHtml(CLINIC.name)}<br/>${escapeHtml(CLINIC.addressShort)}<br/>${escapeHtml(CLINIC.websiteDisplay)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
