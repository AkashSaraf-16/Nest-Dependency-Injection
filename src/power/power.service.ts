import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
 supplyPower(watts:number){
  console.log(`Providing ${watts} watts worth of power.`)
 }
}
