import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
import { certificates } from '../models/certificates/certificate.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {

  certificates: certificates [] = [];
   
   constructor(public certificatesService : CertificatesService)
   {
    console.log(this.certificatesService);
    this.certificatesService.getCertificate().snapshotChanges().pipe(
      map(changes => 
        changes.map(c =>
        ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
     ).subscribe(data => {
      this.certificates = data;
      console.log(this.certificates);
     })
   }
}
