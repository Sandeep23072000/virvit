import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TimeService } from 'src/app/time.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  namevalue: any;
  profileForm: FormGroup;
  skillslist: any;
  preferencelist: any;
  countrylist: any;
  statelist: any;
  currencylist: any;
  url: any;
  organisationlist: any;
  submitted = false;
  uploadresume: any;
  uploadtestimonial: any;
  uploadvideo: any;


  constructor(
    private timeService: TimeService,
    private fb: FormBuilder,
    private http: HttpClient,

  ) {
    this.addskill();
    this.addpreference();
    this.addcountry();
    this.addcurrency();
    this.addorganization();

    this.profileForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobile: ['', Validators.required],
     
      email: [{ value: '', readonly: true }, Validators.required],
      designation: ['', Validators.required],
      gender: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      experience: ['', Validators.required],
      salary: ['', Validators.required],
      country: ['', Validators.required],
      aboutme: ['', Validators.required],
      jobpreference: ['', Validators.required],
      employmentstatus: ['', Validators.required],
      skill: ['', Validators.required],
      currency: ['', Validators.required],

      education: this.fb.array([]),
      workexperience: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.namevalue = JSON.parse(localStorage.getItem("login") || '{}');
    console.log(this.namevalue);
    this.url = this.namevalue.image;
    this.uploadresume = this.namevalue.resume;
    this.uploadvideo = this.namevalue.video_resume_detail;
    this.uploadtestimonial = this.namevalue.user_testimonial;
    if (this.namevalue != null) {
      this.profileForm.setValue({
        firstname: this.namevalue.first_name,
        lastname: this.namevalue.last_name,
        mobile: this.namevalue.mobile,
        email: this.namevalue.email,
        designation: this.namevalue.designation,
        aboutme: this.namevalue.about,
        gender: this.namevalue.gender,
        dateofbirth: this.namevalue.dob,
        experience: this.namevalue.experience,
        salary: this.namevalue.salary,
        country: this.namevalue.country,
        jobpreference: this.namevalue.job_preference,
        currency: this.namevalue.currency,
        employmentstatus: this.namevalue.employment_status,
        skill: this.namevalue.skill,
        education: [],
        workexperience: [],

      });
    }
    this.namevalue.education_detail.forEach((value: any) => {
      console.log(value);
      this.education.push(this.fb.group({
        title: value.title,
        university: value.university,
        startdate: value.start_date,
        enddate: value.end_date,
        country: value.state_detail.country,
        state: value.state_detail.name,

      }))
    });
    if (this.namevalue.employment_detail.length > 0) {
      this.namevalue.employment_detail.forEach((value: any) => {
        console.log(value);
        this.workexperience.push(this.fb.group({
          designation: value.designation,
          organisation: value.organisation,
          currentlyworking: value.currentlyworking,
          startdate: value.start_date,
          enddate: value.end_date,
          employment_status: value.employment_status,
        }))
      });
    }
  }

  get education() {
    return this.profileForm.controls["education"] as FormArray;
  }

  addeducation() {
    const eduForm = this.fb.group({
      title: '',
      university: '',
      startdate: '',
      enddate: '',
      country: '',
      state: '',
    });
    this.education.push(eduForm);
  }

  removeedu(i: number) {
    this.education.removeAt(i);
  }


  get workexperience() {
    return this.profileForm.get("workexperience") as FormArray
  }
  addwork() {
    const workForm = this.fb.group({
      designation: '',
      organisation: '',
      currentlyworking: '',
      startdate: '',
      enddate: '',
      employment_status: '',
    });
    this.workexperience.push(workForm);
  }
  removework(j: number) {
    this.workexperience.removeAt(j);
  }

  resumeupload(event: any) {
    const resume = event.target.files[0];
    console.log(resume)
    this.uploadresume = resume;
  }

  videoresume(event: any) {
    const videoupload = event.target.files[0];
    console.log(videoupload);
    this.uploadvideo = videoupload;
  }
  videotestimonial(event: any) {
    const testimonial = event.target.files[0];
    console.log(testimonial)
    this.uploadtestimonial = testimonial;
  }
  addskill() {
    this.timeService.getapi('skill/').subscribe((data: any) => {
      console.log(data.results);
      this.skillslist = data.results;
    })
  }
  addpreference() {
    this.timeService.getapi('job-preference/').subscribe((data: any) => {
      console.log(data.results);
      this.preferencelist = data.results;
    })
  }
  addcountry() {
    this.timeService.getapi('country/').subscribe((data: any) => {
      console.log(data.results);
      this.countrylist = data.results;
    })
  }
  addcurrency() {
    this.timeService.getapi('currency/').subscribe((data: any) => {
      console.log(data.results);
      this.currencylist = data.results;
    })
  }
  addorganization() {
    this.timeService.getapi('organisation/').subscribe((data: any) => {
      console.log(data.results);
      this.organisationlist = data.results;
    })
  }
  getcountry(event: any): void {
    const select = event.target.value;
    console.log(select);

    this.timeService.getapi('state/?country=' + select).subscribe((data: any) => {
      console.log(data.results);
      this.statelist = data.results;
    })
  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 

      reader.onload = (event: any) => { 
        this.url = event.target.result;
      }
    }
  }
  onSubmit() {

    this.submitted = true;
    if (this.profileForm.valid) {
      const Candidatelist = [
        { about: this.profileForm.get('aboutme')?.value },
        { country: this.profileForm.get('country')?.value },
        { salary: this.profileForm.get('salary')?.value },
        { experience: this.profileForm.get('experience')?.value },
        { currency: this.profileForm.get('currency')?.value },
        { designation: this.profileForm.get('designation')?.value },
        { dob: this.profileForm.get('dateofbirth')?.value },
        { email: this.profileForm.get('email')?.value },
        { job_preference: this.profileForm.get('jobpreference')?.value },
        { skill: this.profileForm.get('skill')?.value },
        { first_name: this.profileForm.get('firstname')?.value },
        { gender: this.profileForm.get('gender')?.value },
        { employmentstatus: this.profileForm.get('employmentstatus')?.value },
        { last_name: this.profileForm.get('lastname')?.value },
        { mobile: this.profileForm.get('mobile')?.value },
        { image: this.url},
        { educationitem: this.profileForm.get('education')?.value },
        { resume: this.uploadresume },
        { testimonial: this.uploadtestimonial },
        { videoupload: this.uploadvideo},
      ];
      console.log(Candidatelist);
    
      this.timeService.postForm('user-profile-update/', Candidatelist).subscribe(response => {
        console.log(response)
      });
     }
    else {
      console.log('error');
    }
  }
}