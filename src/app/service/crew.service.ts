import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Crew {
  id: number;
  firstName: string;
  lastName: string;
  nationality: string;
  certificates?: Certificate[];
  daysOnBoard: number;
  dailyRate: number;
  currency: string;
  totalIncome: number;
}

export interface Certificate {
  name: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  
  crew: Crew[] = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        nationality: 'USA',
        certificates: [
          {
            name: 'US Citizen',
            date: '2022-01-01'
          },
          {
            name: 'US Passport',
            date: '2022-01-01'
          }
        ],
        daysOnBoard: 10,
        dailyRate: 100,
        currency: 'USD',
        totalIncome: 1000
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        nationality: 'USA',
        certificates: [
          {
            name: 'US Citizen',
            date: '2022-01-01'
          },
          {
            name: 'US Passport',
            date: '2022-01-01'
          }
        ],
        daysOnBoard: 10,
        dailyRate: 100,
        currency: 'USD',
        totalIncome: 1000
      },
      {
        id: 3,
        firstName: 'Sam',
        lastName: 'Smith',
        nationality: 'USA',
        certificates: [
          {
            name: 'US Citizen',
            date: '2022-01-01'
          },
          {
            name: 'US Passport',
            date: '2022-01-01'
          }
        ],
        daysOnBoard: 10,
        dailyRate: 100,
        currency: 'USD',
        totalIncome: 1000
      }
    ]
    crewChange$ = new BehaviorSubject<Crew[]>(this.crew);

  constructor() {
    this.loadFromLocalStorage();
  }

  getCrew() {
    return this.crew;
  }

  updateCrew(updated: Crew) {
    const index = this.crew.findIndex(c => c.id === updated.id);
    this.crew[index] = updated;
    this.saveToLocalStorage();
    this.crewChange$.next(this.crew);
  }

  getCrewById(id: number) {
    return this.crew.find(c => c.id == id);
  }

  // deleteCrew(id: number) {
  //   const index = crew.findIndex(c => c.id === id);
  //   crew.splice(index, 1);
  // }

  addCrew(newCrew: Crew) {
    this.crew.push(newCrew);
    this.saveToLocalStorage();
    this.crewChange$.next(this.crew);
  }

  generateId() {
    const id = this.crew[this.crew.length - 1].id + 1;
    return id;
  }

  saveToLocalStorage() {
    localStorage.setItem('crew', JSON.stringify(this.crew));
  }

  loadFromLocalStorage() {
    this.crew = JSON.parse(localStorage.getItem('crew') || '[]');
    this.crewChange$.next(this.crew);
  }
}
