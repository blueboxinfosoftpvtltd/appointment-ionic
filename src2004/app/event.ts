export class Event {
  id?: number;
  subject?: string;
  description?: string;
  location?: string;
  instructor?: string;
  start?: Date;
  end?: Date;
  recurrencePattern?: string;
  recurrenceException?: string;
  employee_name?:string;
  employee_age?:string;
  title?:string;
  
  text?: string;
  startDate?: Date;
  endDate?: Date;
  allDay?: boolean;

AppointmentId?: number;
FkCustomerId?: number;
AdvisorId?: number;
FkDealershipId?: number;
PatientName?: any;
AdvisorName?: any;
AppointmentTimeId?: any;
AppointmentTime?: any;
Description?: any;
Location?: any;
VIN?: any;
Year?: any;
Make?: any;
Model?: any;
Trim?: any;
MobilePhone?: any;
Status?: any;
DealershipName?: any;
Date?:any;
StartDate?: any;
EndDate?: any;
Type?: number;
}
