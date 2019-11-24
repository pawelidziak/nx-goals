import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgrxFormsFacade, Field } from '@workspace/ngrx-forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToolbarFacade, NavLink } from '@workspace/toolbar';

const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'Title',
    placeholder: 'Title',
    validator: [Validators.required],
    styles: {
      width: '100%'
    }
  },
  {
    type: 'SELECT',
    name: 'Priority',
    validator: [Validators.required],
    attrs: {
      selectOptions: ['A', 'B', 'C', 'D']
    },
    styles: {
      width: '100%'
    }
  },
  {
    type: 'DATEPICKER',
    name: 'Deadline',
    styles: {
      width: '100%'
    }
  },
  {
    type: 'TEXTAREA',
    name: 'Description',
    placeholder: 'Description',
    validator: [],
    styles: {
      width: '100%'
    }
  }
];

const navLinks: NavLink[] = [
  { label: 'Goals', icon: 'trending_up' },
  { label: 'Add', icon: 'add', center: true },
  { label: 'Settings', icon: 'settings' }
];

@Component({
  selector: 'workspace-goal-add',
  templateUrl: './goal-add.component.html',
  styleUrls: ['./goal-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalAddComponent implements OnInit {
  structure$: Observable<Field[]>;
  data$: Observable<any>;

  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private toolbarFacade: ToolbarFacade
  ) {}

  ngOnInit() {
    this.ngrxFormsFacade.setStructure(structure);
    this.toolbarFacade.setLinks(navLinks);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  submit() {
    console.log('TODO submit');
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
}
