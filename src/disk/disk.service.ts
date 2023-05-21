import { Injectable } from '@nestjs/common'; 
import { PowerService } from "../power/power.service"
@Injectable()
export class DiskService {
 constructor(private powerService:PowerService){}
 getData():string{
  return "Fetching data... Consuming 5 watt of power from PowerService."
  this.powerService.supplyPower(5)
 }
}
