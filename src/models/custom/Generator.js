import {Model} from "@/models/Model";
import {Api} from "@/models/Api";

export class Generator extends Model {
  constructor(data = {}) {
    super(Api.END_POINTS.BASE(), data);
  }
}
