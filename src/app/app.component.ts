import { Component, computed, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SettingsService } from './appstate/settings.service';
import { Edition } from './data/edition.enum';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  private settingsService = inject(SettingsService);
  public settingsLabel = computed(() => this.settingsService.settings().editions
    .map(edition => this.editionLabel(edition))
    .join(' + ') || 'No edition');

  private editionLabel(edition: Edition): string {
    switch (edition) {
      case Edition.Base:
        return ' ';
      case Edition.PoK:
        return 'PoK';
      case Edition.TE:
        return 'TE';
    }
  }

  constructor() {
    this.matIconRegistry.addSvgIcon('arborec', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/arborec.svg'))
      .addSvgIcon("barony of letnev", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/barony of letnev.svg'))
      .addSvgIcon("clan of saar", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/clan of saar.svg'))
      .addSvgIcon("embers of muat", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/embers of muat.svg'))
      .addSvgIcon("emirates of hacan", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/emirates of hacan.svg'))
      .addSvgIcon("federation of sol", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/federation of sol.svg'))
      .addSvgIcon("ghosts of creuss", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/ghosts of creuss.svg'))
      .addSvgIcon("l1z1x mindnet", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/l1z1x mindnet.svg'))
      .addSvgIcon("mentak coalition", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/mentak coalition.svg'))
      .addSvgIcon("naalu collective", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/naalu collective.svg'))
      .addSvgIcon("nekro virus", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/nekro virus.svg'))
      .addSvgIcon("sardakk n'orr", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/sardakk n'orr.svg"))
      .addSvgIcon("universities of jol-nar", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/universities of jol-nar.svg'))
      .addSvgIcon("winnu", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/winnu.svg'))
      .addSvgIcon("xxcha kingdom", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/xxcha kingdom.svg'))
      .addSvgIcon("argent flight", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/argent flight.svg'))
      .addSvgIcon("empyrean", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/empyrean.svg'))
      .addSvgIcon("mahact gene-sorcerers", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/mahact gene-sorcerers.svg'))
      .addSvgIcon("naaz-rokha alliance", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/naaz-rokha alliance.svg'))
      .addSvgIcon("nomad", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/nomad.svg'))
      .addSvgIcon("titans of ul", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/titans of ul.svg'))
      .addSvgIcon("vuil'raith cabal", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/factions/vuil'raith cabal.svg"))
      .addSvgIcon("yin brotherhood", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/yin brotherhood.svg'))
      .addSvgIcon("yssaril tribes", this.domSanitizer.bypassSecurityTrustResourceUrl('assets/factions/yssaril tribes.svg'));
  }
}
