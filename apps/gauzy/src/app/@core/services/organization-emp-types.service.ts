import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrganizationEmpTypesService {
	constructor(private http: HttpClient) {}

	deleteEmployeeType(id: number) {
		return this.http.delete(`/api/empTypes/delType/${id}`).toPromise();
	}

	update(empType) {
		return this.http
			.patch(`/api/empTypes/updateType/${empType.id}`, empType)
			.toPromise();
	}
}
