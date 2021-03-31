# Nebulonia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Kezelési infók
Itt kezelheted a pontokat és eseményeket:
  http://www.nebulonia.ro/admin  
[2020.05.07 02:54AM - kor =))] a parola: nalf123  
  
Az idei elnökséget az:  
src/app/components/page-main/app.main.component.ts  
typescript file komponensének constructor(){}-jában editálhatod  
  
Az archívum oldal bõvítését a    
src/app/components/page-archive/app.archive.component.ts  
src/app/components/page-archive/app.archive.component.html  
fileok editálásával érheted el.  

 A .html-file ba szúrj be az <!--ADD NEW YEARBLOCKS HERE --> részre egy ilyen sort:    
 <app-year [offset]="offset" [archiveElement]="archiveElements[n]"></app-year>  
  (ahol "n" az idei év sorszáma (aka. ahányadik év a weboldalon))  

  A .ts-file ba a  
  this.archiveElements = [{},{}, [...]]  
  !!VÉGÉRE!! szúrj be egy új kapcsos zárójelt a fenti modellek szerint és változtasd az értékeket  
  (a tulajdonképpeni fileok automatikusan beolvasódnak az assets/images/archive/(beírt év) - folderbõl)    
  (vigyázz hogy a nevek pontosan találjanak (case sensitive (aka. .JPG != .jpg)))  
  (a thumbnailek csökkentett rezolúciojú képek amiket az oldal alaphelyzetben kimutat)  
  (a hasonló nevû teljes képek akkor nyilnak meg amikor a felhasználó rákattint a képekre)  

A fordítandó szövegek az assets/i18n/hu.json és ro.json fileokban vannak tárolva (az elnökség által betöltött pozició is ide linkel)  
Ha egy fordítás hibásan jelenik meg akkor caching-problémád van. Ezt úgy kezelheted hogy hozzáadsz egyet az app/app.component.ts - ben a fordítások nevéhez ['huV(n+1)', 'roV(n+1)'] illetve hasonlóan kicseréled az i18n/ - folderben a fileok nevét.  

A siteot kell "compile"-olni. Erre fent, angolul kapsz útmutatást, ha nem jön össze megkérdezhetsz facebookon (a fejlesztõk oldalán megtalálod, itt is nem linkelek).  

A file megírásakor a siteot ftp-szerveren kezeljük. Erre a feltöltés problémás. Csak azokat a fileokat töltsd fel amiken változtattál.  

Az osztálypontokat itt kezelheted, illetve ugyancsak itt fontosabb linkeket is elérhetsz:  
http://www.nebulonia.ro/admin

## Fontosabb megemlítenivalók

Az instagram https://lightwidget.com/ - rõl megy. Sokszor nem updateolódik rendesen és nem engedi hogy a siteból https-t csináljunk (így néhány antivirus leblokálja). Egyszeri fizetéssel meg lehet vásárolni (ami a jelent illeti), ajánlom.

Ha ötletekrõl írok, az admin-pagebe beszúrhattok egy "kapusbácsi lógassa a kulcsot" képet, mert nekem nem volt alkalmam (koronavírus yeey).

Easter-eggek (amire még emlékszem):  
  Az elnökségi képek összenyomogatásakor(nem emlékszem pontosan mi) megjelenik egy külön erre a célra vágott videó  
  Az error page-en az "Az iskoláját!" szöveg belinkeli az iskolát  
  Ha 5ször rákattintassz a fejlesztõk oldali képekre, megváltoznak  
  Az archívum oldalon a nebulónia logó karácsonykor mikulás ruhát kap  
  Ugyanez a logó többszörös klikkeléskor megváltozik  

A facebook iframe-en van egy "workaround" ami megengedi hogy reszponzíven újraméretezõdjön. Ez mûködésképtelenné vállhat a jövõben.

A site "be van iratva" a facebook graph és a google analitics micsodákba.  
A site ikonjai a https://realfavicongenerator.net/ -el voltak generálva.

Szôke András-Loránd
