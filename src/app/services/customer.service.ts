import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  addCustomer(
    form: FormGroup,
    data: {
      idsflag: any;
      licensePlate: any;
      avgMileage: any;
      trimId: any;
      userId: any;
      dealerId: any;
    }
  ) {
    const body = {
      UserName: form.get("username").value,
      Password: form.get("password").value,
      FirstName: form.get("firstName").value,
      LastName: form.get("lastName").value,
      OtherName: form.get("companyName").value,
      EmailId: form.get("email").value,
      HomePhone: form.get("homePhone").value,
      WorkPhone: form.get("workPhone").value,
      MobilePhone: form.get("mobile").value,
      Address1: form.get("addressLine1").value,
      Address2: form.get("addressLine2").value,
      CountryId: form.get("country").value,
      CityId: form.get("city").value,
      StateId: form.get("state").value,
      ZipCode: form.get("zipcode").value,
      ColorId: form.get("color").value,
      LicensePlate: data.licensePlate,
      AverageMilesOrMonth: data.avgMileage,
      VIN: form.get("carVIN").value,
      Mileage: form.get("carMileage").value,
      MakeId: form.get("carMake").value,
      YearId: form.get("carYear").value,
      ModelId: form.get("carModel").value,
      TrimId: data.trimId,
      UserId: data.userId,
      ModifiedBy: data.userId,
      DealershipId: data.dealerId,
      IDSFlag: data.idsflag,
    };
    return this.http.post(environment.baseApiUrl + "/InsertCustomer", body);
  }
}
