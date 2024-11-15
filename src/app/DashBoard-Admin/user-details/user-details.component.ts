import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userProfiles: any[] = []; // Array to store user profile data
  apiUrl = 'https://localhost:7006/api/UserProfile/AllUsers'; // Sample API URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUserProfiles();
  }

  fetchUserProfiles(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.userProfiles = data;
      },
      (error) => {
        console.error('Error fetching user profiles:', error);
      }
    );
  }
}
