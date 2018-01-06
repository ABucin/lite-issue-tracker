import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Activity} from '../../model/activity.model';
import {EActivityType} from '../../model/activity-type.enum';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ActivityComponent implements OnInit {

  @Input()
  public activity: Activity;

  constructor() { }

  public generateActionClass(): string {
    let type = '';

    switch (this.activity.type) {
      case EActivityType.WORKLOG: {
        type = 'action-worklog';
        break;
      }
      case EActivityType.COMMENT: {
        type = 'action-comment';
        break;
      }
      default: {
        break;
      }
    }

    return `action ${type}`;
  }

  ngOnInit() {
  }

}
