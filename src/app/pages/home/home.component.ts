import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country/country.service';
import { Country } from '../../model/country.model';
import { ThemeService } from 'src/app/services/theme/theme.service';

const REGION_OPTIONS = ['All','Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private source: Country[];
  searchFilter?: string;
  regionFilter?: string;
  regionOptions = REGION_OPTIONS;

  constructor(private countryService: CountryService, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((countries) => {
      this.source = countries;
    });
  }

  get countries() {
    return this.source
      ? this.source
          .filter((country) =>
            this.searchFilter
              ? country.name
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : country
          )

          .filter((country) =>
            this.regionFilter==='All'? this.source: this.regionFilter
              ? country.region.includes(this.regionFilter)
              :country
    )
      : this.source
  } ;

  toogleTheme(){
    this.themeService.toggleMode();
  }
}
