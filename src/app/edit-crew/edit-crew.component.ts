import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Certificate, Crew, CrewService } from '../service/crew.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-crew',
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
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    DatePipe
  ],
  templateUrl: './edit-crew.component.html',
  styleUrl: './edit-crew.component.scss'
})
export class EditCrewComponent {
  crewData: Crew;
  newCertificate: Certificate = {name: '', date: ''};
  translatePipe: TranslatePipe;
  constructor(
    public dialogRef: MatDialogRef<EditCrewComponent>,
    private translate: TranslateService,
    private crewService: CrewService,
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: Crew
  ) {
    this.crewData = JSON.parse(JSON.stringify(data));
    this.translatePipe = new TranslatePipe(translate, changeDetectorRef);
  }
  
  getTranslation(key: string) {
    return this.translatePipe.transform(key);
  }

  addCertificate() {
    this.crewData!.certificates!.push(this.newCertificate);
    this.newCertificate = {name: '', date: ''};
  }

  onClickOK() {
    this.crewService.updateCrew(this.crewData);
    this.dialogRef.close();
  }

  onClickCancel() {
    this.dialogRef.close();
  }

  onChangeDaysOnBoardOrRate() {
    this.crewData.totalIncome = this.crewData.dailyRate * this.crewData.daysOnBoard;
  }
}
