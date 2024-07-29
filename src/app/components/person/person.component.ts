import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  users: any[] = [];
  isAdmin: boolean = false;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUsers();
    this.isAdmin = this.authService.isInRole('admin');
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data: any[]) => {
        console.log(data);  // Log the data to the console
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);  // Log any errors
      }
    );
  }
}
