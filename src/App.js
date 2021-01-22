import "./App.css";

import AccordionComponent from "./components/Accordion/accoridion";

const data = [
  {
    heading: "Herzlich Willkommen bei Küchenheld",
    createdAt: "09. August 2020",
    content: `<div class="rich-text-block w-richtext"><p><strong>Guten Tag Herr Pesch,</strong></p><p>Wir begrüßen Sie herzlich bei Küchenheld – der smarten Art von Küchenstudio.</p><p>Mit uns sparen Sie Zeit, gewinnen Transparenz und erleben höchste Qualität beim Küchenkauf. Auch in diesen Wochen, unter den besonderen Umständen der Corona-Auflagen, planen, liefern und montieren wir Ihre Traumküche. Sie erleben den garantierten Küchenheld-Service einfach, transparent und digital, entweder von Zuhause aus oder exklusiv in unserem Smartroom.</p><p>Wir tun alles dafür, Ihre Traumküche umgehend wahr werden zu lassen!</p><figure class="w-richtext-align-floatleft w-richtext-figure-type-image"><div><img alt="1" src="https://uploads-ssl.webflow.com/5f18886063186b64a1bd2586/5f231f92970d59d764d33acf_email-circle-01%40x2.png"></div></figure><p><strong>Wir rufen Sie in Kürze an</strong> – damit wir besser verstehen, was Sie sich wünschen. Im Anschluss an das 30-minütige Telefonat erhalten Sie ein erstes <strong>kostenloses Angebot</strong> für Ihre Wunschküche.</p><p>‍</p><figure class="w-richtext-align-floatleft w-richtext-figure-type-image"><div><img alt="2" src="https://uploads-ssl.webflow.com/5f18886063186b64a1bd2586/5f231f928ed829697fb415ca_email-circle-02%40x2.png"></div></figure><p><strong>Inspiriert von Ihren Vorstellungen</strong> entwerfen unsere Küchenhelden Ihre Küche. Bis ins kleinste Detail geplant, können Sie Ihre neue Küche jetzt in Virtual Reality in einem unserer Smartrooms oder per Videotelefonie von Zuhause aus erleben. <strong>Nach zwei Stunden intensiver Beratung ist Ihre Küche bestellfertig.</strong> Materialproben senden wir auf Wunsch zu Ihnen nach Hause.</p><p>‍</p><figure class="w-richtext-align-floatleft w-richtext-figure-type-image"><div><img alt="3" src="https://uploads-ssl.webflow.com/5f18886063186b64a1bd2586/5f231f93aec86e9482cfa759_email-circle-03%40x2.png"></div></figure><p>Die Planung und das passende Angebot für Ihre Küche liegen Ihnen nun im Detail vor. <strong> Jetzt machen Sie einen Liefer- und Montagetermin mit uns aus!</strong> Wir bringen Ihre maßgeschneiderte Küche zu Ihnen nach Hause und lassen Ihren Traum wahr werden.</p><p>‍</p><p>‍</p><p>Haben Sie weitere Fragen? Dann können Sie uns gerne direkt anrufen unter <strong>+49 30 - 403 674 940</strong></p><p>Wir freuen uns auf das Gespräch mit Ihnen!</p><p>Mit freundlichen Grüßen</p><figure class="w-richtext-align-normal w-richtext-figure-type-image"><div><img src="https://uploads-ssl.webflow.com/5f18886063186b64a1bd2586/5f231f93dc166c7b4abe2705_signature-tw%40x2.png" alt=""></div></figure><p>Tanja Woutskowsky</p><p>Marketingleitung</p><figure class="w-richtext-align-normal w-richtext-figure-type-image"><div><img src="https://uploads-ssl.webflow.com/5f18886063186b64a1bd2586/5f231f936274417683a7209e_signature-le%40x2.png" alt=""></div></figure><p>Dr. Love Erik Edquist</p><p>Geschäftsführung</p><p>‍</p></div>`,
  },
  {
    heading: "Küchenheld - Terminbestätigung für Ihre Anfrage",
    createdAt: "08. August 2020",
    content: `<div class="expandable-text expandable-accordion-text" style="display: block;"><div class="rich-text-block w-richtext"><p>Guten Tag Herr Pesch,</p><p>vielen Dank für das kurze Telefonat. Gerne starten wir mit Ihnen direkt in die Planung Ihrer Traumküche.</p><p>Für ein 30-minütiges Telefonat, in dem wir besser verstehen, was Sie sich wünschen, bestätigen wir folgendes Datum:</p><p><strong>Montag, 03.08.2020, um 15:00 Uhr. Wir rufen Sie an.</strong></p><p>Im Anschluss erhalten Sie von uns ein erstes kostenloses und unverbindliches Angebot für Ihre Traumküche.</p><p><strong>Wichtig zu wissen:</strong> Bei uns können Sie frei wählen. Entweder Sie kaufen Ihre Wunschküche <strong>vollständig online und von zuhause aus</strong>. Oder Sie besuchen uns exklusiv in einem unserer <strong>Smartrooms</strong>. Der Smartroom wird ausschließlich für Sie reserviert und bietet Ihnen zwei Stunden lang eine ganz besondere Virtual-Reality-Erfahrung. Egal wie Sie sich entscheiden: <strong>Wir bieten Ihnen ein einzigartiges All-in-One-Erlebnis -- von der ersten Idee bis zur fertig eingebauten Traumküche.</strong></p><p>Mit freundlichen Grüßen</p><p><strong>Kristian Lednar </strong><br>Kundenberatung</p><p><strong>Küchenheld  die moderne Art von Küchenstudio</strong><br>Telefon: +49 69 - 273 156 455<br><a href="mailto:kristian.lednar@kuechenheld.de">kristian.lednar@kuechenheld.de</a> <br><br>Taunusstraße 70, 55118 Mainz<br>Küchenheld GmbH, Sitz der Gesellschaft: Mainz<br>HR Mainz, HRB Nr. 48625, USt-IdNr. DE322206295<br>Geschäftsführer: Ivo Wissler, Dr. Love Erik Edquist<br></p></div></div>`,
  },
];

function App() {
  return (
    <div className="App">
      <AccordionComponent information={data} />
    </div>
  );
}

export default App;
