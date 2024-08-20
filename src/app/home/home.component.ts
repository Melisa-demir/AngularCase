import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import { Crew, CrewService } from '../service/crew.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { CreateUserComponent } from '../create-crew/create-crew.component';
import { MatButtonModule } from '@angular/material/button';
import { EditCrewComponent } from '../edit-crew/edit-crew.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, TranslateModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'nationality', 'daysOnBoard', 'dailyRate', 'currency', 'totalIncome', 'controls'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  
  constructor(private crewService: CrewService, private translate: TranslateService, private router: Router, public dialog: MatDialog) {
    this.dataSource.data = crewService.getCrew();
  }
  
  ngOnInit(): void {
    this.crewService.crewChange$.subscribe(crew => {
      this.dataSource.data = crew;
    });
  }

  navigateToCrewCard(id: number) {
    console.log(id);
    this.router.navigateByUrl(`/crew/${id}`);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '40%',
      data: {
        id: 0,
        firstName: '',
        lastName: '',
        nationality: '',
        certificates: [],
        daysOnBoard: 0,
        dailyRate: 0,
        currency: '',
        totalIncome: 0
      }
    });
  }

  openEditDialog(crew: Crew, event:any) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(EditCrewComponent, {
      width: '40%',
      data: crew
    });
  }
}
