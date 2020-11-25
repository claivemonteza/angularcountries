import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { CountryService } from './services/country/country.service';
import { ThemeService, Theme } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  theme: Observable<Theme>;

  constructor(
    private countryService: CountryService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.theme = this.themeService.mode$;
  }
}
