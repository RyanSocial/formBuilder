// import {TestBed} from '@angular/core/testing';
// import {BrokersService} from './brokers.service';
// import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
// import {Broker} from "../../../../models/broker.interface";
//
// const testBroker = {
//   "_id": "5db03981873f00615648459c",
//   "broker_id": 681,
//   "db_name": "pg_acaweb_v",
//   "active": false,
//   "deactivation_date": 1678956963648,
//   "note": "Cancelled by divesh@autochartist.com",
//   "name": "10x",
//   "solr_use_df_offset": false,
//   "has_mobile": false,
//   "solr_xmlapi_collection": null,
//   "performancestatstype": null,
//   "realm_config": null,
//   "logo": null,
//   "mobile": {
//     "show_login": false,
//     "has_mobile": false,
//     "mobile_chart_style": null,
//     "mobile_lead_generation_web_hook": null,
//     "has_va": false
//   }
// }
// describe('Brokers Service', () => {
//   let brokersService: BrokersService;
//   let httpTestingController: HttpTestingController
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [BrokersService]
//     });
//     brokersService = TestBed.inject(BrokersService);
//     httpTestingController = TestBed.inject(HttpTestingController)
//   });
//   afterEach(() => {
//     httpTestingController.verify()
//   })
//
//   it('creates service', () => {
//     expect(BrokersService).toBeTruthy();
//   });
//   describe('Get Brokers', () => {
//     it('Should return an array of brokers', () => {
//       // let brokers: Broker[] | undefined
//       // brokersService.getBrokers().subscribe({
//       //   next: brokersResponse => {
//       //     brokers = brokersResponse
//       //   }
//       // })
//       const req = httpTestingController.expectOne('https://vhagar.autochartist.com:8080/api/fetchBrokers')
//       req.flush([testBroker])
//       expect(brokers).toEqual([testBroker])
//     })
//   })
// });
