import {Component, Input} from '@angular/core';
import {Email} from "../../../assets/models/data-model";

@Component({
  selector: 'selected-email',
  templateUrl: './selected-email.component.html',
  styleUrls: ['./selected-email.component.scss']
})
export class SelectedEmailComponent  {
  @Input() selectedEmail: Email;
}
