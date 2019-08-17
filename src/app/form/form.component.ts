import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormServiceService } from '../form-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private formService: FormServiceService) { }

  newUser = new User();
  onSubmit() {
    console.log(this.newUser);
    this.formService.add(this.newUser);
  }
  fire() {
    Swal.fire('Success', 'Check in details', 'success');
  }

  ngOnInit() {
  }

}
