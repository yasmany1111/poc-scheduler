import { Component, OnDestroy, OnInit } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from '../../mock-data';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent {
  public selectedDate: Date = new Date(2019, 0, 10);
  public eventSettings: EventSettingsModel = {
    dataSource: <any[]>extend([], scheduleData, null, true),
  };
}
