import { getDictionary, type Locale } from "../i18n";

export default function ProfileCards({ locale }: { locale: Locale }) {
  return (
    <div className="profile-sheets">
      {getDictionary(locale).profile.sheets.map((block) => (
        <section key={block.title} className="profile-sheet">
          <h3>{block.title}</h3>
          <dl>
            {block.items.map((item) => (
              <div key={item.label} className="meta-row"><dt>{item.label}</dt><dd>{item.value}</dd></div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
