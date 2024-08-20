import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrewService } from '../service/crew.service';
import { TranslateModule, TranslateService} from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-crew-card',
  standalone: true,
  imports: [TranslateModule, MatListModule, DatePipe],
  templateUrl: './crew-card.component.html',
  styleUrl: './crew-card.component.scss'
})
export class CrewCardComponent implements OnInit {

  crew: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private crewService: CrewService, translate: TranslateService) {
  }
  
  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.crew = this.crewService.getCrewById(id);
  }


}
