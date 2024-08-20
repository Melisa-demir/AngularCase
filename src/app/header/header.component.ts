import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LangService } from '../service/lang.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  languages:any = [];
  selected:any = undefined;

  constructor(private langService: LangService, private translate: TranslateService, private router: Router) {
    this.languages = langService.getLanguages();
  }
  ngOnInit(): void {
    this.selected = this.langService.getLanguage();
  }
  onLanguageChange(event: any) {
    this.langService.setLanguage(event.value.code);
    this.translate.use(event.value.code);
    this.selected = event.value;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
  
  
}
