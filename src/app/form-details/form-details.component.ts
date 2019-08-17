import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
  public Users: User[];

  constructor(private formService: FormServiceService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.formService.getArray().subscribe(data => this.Users = data);
  }

}
