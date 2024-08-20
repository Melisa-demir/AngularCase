import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrewService } from './service/crew.service';
import { LangService } from './service/lang.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HeaderComponent } from "./header/header.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule, HeaderComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crew';

  constructor(translate: TranslateService, private langService: LangService) {
    translate.setDefaultLang('en');
    translate.use(langService.getLanguage().code);

  }

  


}
