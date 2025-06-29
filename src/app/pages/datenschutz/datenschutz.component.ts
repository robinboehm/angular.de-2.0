import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-white">
      <div class="container-max max-w-4xl">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div class="prose prose-lg max-w-none">
          <p class="mb-6">
            Mit dieser Datenschutzerklärung möchten wir Sie über Art, Umfang und Zweck der Verarbeitung von personenbezogenen Daten (im Folgenden auch nur als "Daten" bezeichnet) aufklären. Personenbezogene Daten sind alle Daten, die einen persönlichen Bezug zu Ihnen aufweisen, z. B. Name, Adresse, E-Mail-Adresse oder Nutzerverhalten.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Verantwortlicher</h2>
          <p class="mb-6">
            Verantwortlich für die Datenverarbeitung ist:<br><br>
            Symetics GmbH<br>
            Frankfurter Straße 39<br>
            65189 Wiesbaden<br>
            Deutschland<br><br>
            Geschäftsführer: Robin Böhm, Gerd Jungbluth<br>
            Telefon: +49 (0) 611 - 958 419 00<br>
            E-Mail: <a href="mailto:datenschutz@angular.de" class="text-angular-red hover:underline">datenschutz@angular.de</a>
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Datenschutzbeauftragter</h2>
          <p class="mb-6">
            Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br>
            E-Mail: <a href="mailto:datenschutz@angular.de" class="text-angular-red hover:underline">datenschutz@angular.de</a>
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Datenverarbeitung beim Besuch unserer Website</h2>
          
          <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Server-Logfiles</h3>
          <p class="mb-6">
            Bei jedem Zugriff auf unsere Website werden automatisch folgende Informationen erfasst:
          </p>
          <ul class="list-disc list-inside mb-6 space-y-2">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            <li>Name Ihres Internet-Service-Providers</li>
          </ul>
          <p class="mb-6">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aus unserem berechtigten Interesse an der Sicherstellung eines störungsfreien Betriebs unserer Website sowie zur Verbesserung unseres Angebotes.
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Cookies</h3>
          <p class="mb-6">
            Wir verwenden auf unserer Website Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert und ausgelesen werden können. Man unterscheidet zwischen Session-Cookies, die wieder gelöscht werden, sobald Sie ihren Browser schließen, und permanenten Cookies, die über die einzelne Sitzung hinaus gespeichert werden.
          </p>
          <p class="mb-6">
            Wir nutzen diese Cookies zur Darstellung und Funktionalität unserer Website:
          </p>
          <ul class="list-disc list-inside mb-6 space-y-2">
            <li><strong>Technisch notwendige Cookies:</strong> Diese Cookies sind zwingend erforderlich, damit die Website ordnungsgemäß funktioniert.</li>
            <li><strong>Analytische Cookies:</strong> Diese Cookies ermöglichen es uns, die Nutzung der Website zu analysieren, um die Performance zu messen und zu verbessern.</li>
            <li><strong>Marketing Cookies:</strong> Diese Cookies werden verwendet, um Besuchern relevante Werbung und Marketing-Inhalte anzuzeigen.</li>
          </ul>
          <p class="mb-6">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Kontaktaufnahme</h2>
          <p class="mb-6">
            Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p class="mb-6">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Newsletter</h2>
          <p class="mb-6">
            Wenn Sie unseren Newsletter abonnieren, verwenden wir die hierfür erforderlichen oder gesondert von Ihnen mitgeteilten Daten, um Ihnen regelmäßig unseren E-Mail-Newsletter zuzusenden.
          </p>
          <p class="mb-6">
            Die Abmeldung vom Newsletter ist jederzeit möglich und kann entweder durch eine Nachricht an die unten beschriebene Kontaktmöglichkeit oder über einen dafür vorgesehenen Link im Newsletter erfolgen.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Analyse-Tools</h2>
          
          <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Google Analytics</h3>
          <p class="mb-6">
            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited („Google"). Google Analytics verwendet sog. „Cookies". Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
          </p>
          <p class="mb-6">
            Wir haben auf dieser Website die IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Social Media</h2>
          <p class="mb-6">
            Auf unserer Website sind Links zu den sozialen Netzwerken Facebook, Twitter, LinkedIn, GitHub und Discord integriert. Diese sind lediglich als HTML-Links ausgestaltet, so dass beim Aufruf unserer Website noch keine Verbindung zu den Servern der jeweiligen Anbieter hergestellt wird.
          </p>
          <p class="mb-6">
            Wenn Sie einen dieser Links anklicken, werden Sie auf die Seite des jeweiligen Anbieters weitergeleitet. Erst dann werden Nutzerinformationen an den jeweiligen Anbieter übertragen.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Ihre Rechte</h2>
          <p class="mb-6">
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
          </p>
          <ul class="list-disc list-inside mb-6 space-y-2">
            <li><strong>Recht auf Auskunft:</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
            <li><strong>Recht auf Berichtigung:</strong> Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
            <li><strong>Recht auf Löschung:</strong> Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
            <li><strong>Recht auf Einschränkung:</strong> Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
            <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie können verlangen, dass wir Ihnen Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format übermitteln.</li>
            <li><strong>Widerspruchsrecht:</strong> Sie können jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einlegen.</li>
            <li><strong>Recht auf Widerruf:</strong> Sie können erteilte Einwilligungen jederzeit widerrufen.</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Beschwerderecht</h2>
          <p class="mb-6">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:
          </p>
          <p class="mb-6">
            Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br>
            Postfach 3163<br>
            65021 Wiesbaden<br>
            Telefon: +49 611 1408-0<br>
            E-Mail: <a href="mailto:poststelle@datenschutz.hessen.de" class="text-angular-red hover:underline">poststelle@datenschutz.hessen.de</a>
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Datensicherheit</h2>
          <p class="mb-6">
            Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256-Bit-Verschlüsselung.
          </p>
          <p class="mb-6">
            Wir bedienen uns geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p class="mb-6">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025.
          </p>
          <p class="mb-6">
            Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter <a href="/datenschutz" class="text-angular-red hover:underline">https://angular.de/datenschutz</a> von Ihnen abgerufen und ausgedruckt werden.
          </p>
        </div>
      </div>
    </section>
  `
})
export class DatenschutzComponent {}