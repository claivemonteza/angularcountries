import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country/country.service';
import { Observable, forkJoin, of } from 'rxjs';
import { Country} from '../../model/country.model';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  country$: Observable<Country>;

  constructor(private countryService: CountryService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country$ = this.countryService.getCountryByName(params.country).pipe(
        tap((res) => console.log(res)),
      );
    });
  }
}
