import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {User} from '../../../core/model/user.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {

  public columns;
  public rows: User[] = [];

  @ViewChild('nameTemplate') public nameTemplate: TemplateRef<any>;
  @ViewChild('optionsTemplate') public optionsTemplate: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
    this.columns = [
      {
        cellTemplate: this.nameTemplate,
        name: ''
      },
      {
        prop: 'username',
        name: ''
      },
      {
        cellTemplate: this.optionsTemplate,
        name: '',
        sortable: false
      }
    ];

    this.rows[0] = new User();
    this.rows[0].firstName = 'Andrei';
    this.rows[0].lastName = 'Bucin';
    this.rows[0].username = 'andrei@bucin.com';
    this.rows[0].expertise = 'Web Development';

    this.rows[1] = new User();
    this.rows[1].firstName = 'P.';
    this.rows[1].lastName = 'Smith';
    this.rows[1].username = 'p@smith.com';
    this.rows[1].expertise = 'UI/UX';
  }

}
