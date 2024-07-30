import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth/auth.service';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons: Person[] = [];
  isAdmin: boolean = false;

  constructor(private userService: UserService, private personService: PersonService,private authService: AuthService) {}

  ngOnInit(): void {
    alert(this.authService.isInRole('admin'))
    this.isAdmin = this.authService.isInRole('admin');
    this.personService.getPersonList().subscribe(
      (data: Person[]) => {
        this.persons = data;
      },
      (error) => {
        console.error('Error fetching person data: ', error);
      }
    );
  }

 
}
