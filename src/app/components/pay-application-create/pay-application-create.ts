import { CommonModule } from '@angular/common';
import { Component, OnInit, inject} from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import {FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { customValidation } from '../../validators/customValidation.validator';
import { ApiService } from '../../services/api.service';
import { ApplicationModal } from '../../models/application.modal';

@Component({
    selector:'application-create',
    standalone:true,
    templateUrl:'./pay-application-create.html',
    styleUrl:'./pay-application-create.css',
    imports:[
        ReactiveFormsModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule
    ],
    providers: [provideNativeDateAdapter()],
})
export class PayApplicationCreateComponent implements OnInit{
    reactiveForm!: FormGroup;
    model!: ApplicationModal;
    apiService:ApiService = inject(ApiService);

    ngOnInit(): void {
      this.reactiveForm = new FormGroup({
        applicationNo: new FormControl(null, [Validators.required,customValidation.alphanumericValidator]),
        applicationDate: new FormControl(new Date(), [Validators.required]),
        periodStart: new FormControl(new Date(), Validators.required),
        periodEnd: new FormControl(new Date(), Validators.required),
        includeCertificate: new FormControl(null, Validators.required),
        retainage: new FormControl(null, Validators.required),
        changeOrderSummary: new FormControl(null, Validators.required),
      });
    }

    private validateDateFormat(date: Date) {
      const inputDate = new Date(date);
      const day = inputDate.getDate();
      const month = inputDate.getMonth() + 1;
      const year = inputDate.getFullYear();
      return `${year}-${month}-${day}`;
    }
  
    onSubmit() {
        this.model = new ApplicationModal(
        this.reactiveForm.value.applicationNo,
        this.validateDateFormat(this.reactiveForm.value.applicationDate),
        '9229a3af-13de-4b67-9820-fb808b21efa4',
        this.validateDateFormat(this.reactiveForm.value.periodStart),
        this.validateDateFormat(this.reactiveForm.value.periodEnd),
        this.reactiveForm.value.includeCertificate,
        this.reactiveForm.value.retainage,
        this.reactiveForm.value.changeOrderSummary
        );
        console.log(this.model);
        this.reactiveForm.reset();
        this.reactiveForm.patchValue({
          applicationDate: new Date(),
          periodStart: new Date(),
          periodEnd: new Date(),
        });
    }
}