# Nutikas restorani reserveerimissüsteem

## Tehnoloogiad
* **Raamistik:** Vue 3 (Composition API)
* **Ehitustööriist:** Vite
* **API päringud:** Axios
* **Navigatsioon:** Vue Router

## Käivitamine
Eeldus: Arvutis on installitud [Node.js](https://nodejs.org/).

1. **Installi vajalikud paketid:**
   ```bash
   npm install
   ```
2. **Käivita arendusserver:**
   ```bash
   npm run dev
   ```
   *Rakendus on kättesaadav aadressil: http://localhost:5173*

3. **Ühendus Backendiga:**
   *Veendu, et Java backend jookseb aadressil http://localhost:8080.*

## Päevik ja ajakulu

### Päev 10
* **Tegevused:** Front-endi seadistamine & git hoidla loomine 
* API teenuste kihi loomine, kus seadistasin Axiose abil ühenduse front-endi ja peamiste back-endi teenuste vahel.
* Balsamiq - s peamiste brauseri vaadate plaani paika panemine
* **Ajakulu:** ~ 3 tundi

### Päev 11
* **Tegevused:** Peamiste vaadete ja komponentide esmane ettevalmistamine (isikuparasema stiiliga tegelen hiljem)
* Esimene asünkroone päring back-endist. Andmed liiguvad vanemkomponendist tütarkomponenti, et võimaldada restoraniplaani 
* dünaamilist kuvamist.
* Axiose ja Bootstrapi konfiguratsiooni vigade silumine.
* **Ajakulu:** ~ 3 tundi

### Päev 12
* **Tegevused:** Restorani plaani visualiseerimine andmebaasi koordinaatide abil
* Õppisin protsendipõhist paigutust, aspect-ratio kasutamist, ja CSS transform-i
* **Ajakulu:** ~ 2 tundi

### Päev 13
* **Tegevused:** Saaliplaani interaktiivsus ja dünaamiline andmevahetus
* Back-end laudade tagastamise meetodi muutmine - back tagastab nuud kõik lauad kasutades isAvailable staatust sobivatel
* laudadel.
* Sündmuste edastamine laua valimiseks ning visuaalse staatuse (isAvailable) lisamine.
* CSS konditsionaalne kujundus ja hover-efektide tekitamine ja piiramine vastavalt laua saadavusele.
* API teenuse täiendamine päringu parameetritega (params), et siduda front-endi filtrid back-endi loogikaga.
* **Ajakulu:** ~ 4 tundi

### Päev 14
* **Tegevused:** tekstisisetuskastide ühendamine back-endiga
* initialSearchCriteria määramine 
* Back-endi laudade tagasamise meetodi muutmine, et külaliste arv ei oleks laudade toomiseks kohustuslik
* **Ajakulu:** ~ 1 tund

### AI kasutamine
* CSS-i blokkide kirjutamine ja selgitamine - See aitas kiiremini mõista seoseid JavaScripti ja visuaalse stiilimise vahel.
* AI aitas teha meetodi toISOString().split('T')[0], et jagada LocalDateTime osadeks.