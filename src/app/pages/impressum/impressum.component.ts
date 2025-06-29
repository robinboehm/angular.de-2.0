import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-white">
      <div class="container-max max-w-4xl">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p class="mb-6">
            Symetics GmbH<br>
            Frankfurter Straße 39<br>
            65189 Wiesbaden<br>
            Deutschland
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Vertreten durch:</h3>
          <p class="mb-6">
            Geschäftsführer: Robin Böhm, Gerd Jungbluth
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Kontakt:</h3>
          <p class="mb-6">
            Telefon: +49 (0) 611 - 958 419 00<br>
            E-Mail: <a href="mailto:info@angular.de" class="text-angular-red hover:underline">info@angular.de</a><br>
            Web: <a href="https://angular.de" class="text-angular-red hover:underline">https://angular.de</a>
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Registereintrag:</h3>
          <p class="mb-6">
            Eintragung im Handelsregister<br>
            Registergericht: Amtsgericht Wiesbaden<br>
            Registernummer: HRB 29336
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Umsatzsteuer-ID:</h3>
          <p class="mb-6">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
            DE311816639
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV:</h3>
          <p class="mb-6">
            Robin Böhm<br>
            Symetics GmbH<br>
            Frankfurter Straße 39<br>
            65189 Wiesbaden
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Haftungsausschluss</h2>
          
          <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Haftung für Inhalte</h3>
          <p class="mb-6">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Haftung für Links</h3>
          <p class="mb-6">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Urheberrecht</h3>
          <p class="mb-6">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">Workshops.DE</h2>
          <p class="mb-6">
            Angular.de ist ein Community-Portal von Workshops.DE, einem Projekt der Symetics GmbH. Weitere Informationen finden Sie unter <a href="https://workshops.de" class="text-angular-red hover:underline">workshops.de</a>.
          </p>
        </div>
      </div>
    </section>
  `
})
export class ImpressumComponent {}