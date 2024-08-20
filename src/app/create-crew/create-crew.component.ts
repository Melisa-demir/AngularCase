import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Crew, CrewService } from '../service/crew.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    TranslateModule,
  ],
  templateUrl: './create-crew.component.html',
  styleUrl: './create-crew.component.scss'
})
export class CreateUserComponent {
  crewData: Crew;
  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    private crewService: CrewService,
    @Inject(MAT_DIALOG_DATA) public data: Crew
  ) {
    this.crewData = JSON.parse(JSON.stringify(data));
  }
  


  onClickOK() {
    this.crewData.id = this.crewService.generateId();
    this.crewService.addCrew(this.crewData);
    this.dialogRef.close();
  }

  onClickCancel() {
    this.dialogRef.close();
  }

  onChangeDaysOnBoardOrRate() {
    this.crewData.totalIncome = this.crewData.dailyRate * this.crewData.daysOnBoard;
  }

}
