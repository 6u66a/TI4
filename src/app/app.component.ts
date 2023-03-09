import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('arborec', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/arborec.svg'))
        .addSvgIcon("barony of letnev", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/barony of letnev.svg'))
        .addSvgIcon("clan of saar", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/clan of saar.svg'))
        .addSvgIcon("embers of muat", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/embers of muat.svg'))
        .addSvgIcon("emirates of hacan", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/emirates of hacan.svg'))
        .addSvgIcon("federation of sol", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/federation of sol.svg'))
        .addSvgIcon("ghosts of creuss", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/ghosts of creuss.svg'))
        .addSvgIcon("l1z1x mindnet", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/l1z1x mindnet.svg'))
        .addSvgIcon("mentak coalition", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/mentak coalition.svg'))
        .addSvgIcon("naalu collective", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/naalu collective.svg'))
        .addSvgIcon("nekro virus", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/nekro virus.svg'))
        .addSvgIcon("sardakk n'orr", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/sardakk n'orr.svg"))
        .addSvgIcon("universities of jol-nar", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/universities of jol-nar.svg'))
        .addSvgIcon("winnu", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/winnu.svg'))
        .addSvgIcon("xxcha kingdom", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/xxcha kingdom.svg'))
        .addSvgIcon("argent flight", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/argent flight.svg'))
        .addSvgIcon("empyrean", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/empyrean.svg'))
        .addSvgIcon("mahact gene-sorcerers", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/mahact gene-sorcerers.svg'))
        .addSvgIcon("naaz-rokha alliance", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/naaz-rokha alliance.svg'))
        .addSvgIcon("nomad", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/nomad.svg'))
        .addSvgIcon("titans of ul", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/titans of ul.svg'))
        .addSvgIcon("vuil'raith cabal", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/races/vuil'raith cabal.svg"))
        .addSvgIcon("yin brotherhood", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/yin brotherhood.svg'))
        .addSvgIcon("yssaril tribes", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/races/yssaril tribes.svg'));
}
}
