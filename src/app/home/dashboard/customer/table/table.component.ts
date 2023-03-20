import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserenvironmentsService } from 'src/app/userenvironments.service';
import { PageEvent } from '@angular/material/paginator';

export interface PeriodicElement {
  Policy: string
  Name: string;
  Addresss: string;
  Contact: string;
  Executive: string;
  Representtive: string
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class TableComponent {

  dataSource!: MatTableDataSource<PeriodicElement>
  @ViewChild(MatPaginator) private paginator!: MatPaginator;
  @Output() shareCheckedList = new EventEmitter();
  displayedColumns: any;
  customername: any
  TempQuery = {
    Text: "",
    Skip: 0,
    Take: 10,
  }

  constructor(private userEnvironments: UserenvironmentsService) { }

  searchCustomerData: any
  search = ""
  pageIndex = 0;
  token: any
  schema: any
  manualPage = 0
  getDataQuery: any

  handlePageEvent(e: PageEvent) {
    this.manualPage = e.pageIndex + 1;
  }

  ngOnInit() {
    this.token = localStorage.getItem('Token');
    this.userEnvironments.getSchema(this.token).subscribe(response => {
      this.schema = response
      this.displayedColumns = this.schema.TableSchema.HeadersSelected;
      for (var i = 0; i < this.schema.AvailableFilters.length; i++) {
        var DataQuery = {
          ...this.TempQuery,
          [this.schema.AvailableFilters[i]]: this.schema[this.schema.AvailableFilters[i] + "Selected"][0]
        }
        this.TempQuery = { ...DataQuery }
      }
      this.getDataQuery = this.TempQuery
      this.getDataQuery.Filter4 = [this.getDataQuery.Filter4]
    })
  }

  getValues(value: string, filter: string) {
    this.getDataQuery[filter] = value
  }

  callapi() {
    this.searchCustomerData = []
    if (this.search != "") {
      this.getDataQuery.Text = this.search
      this.userEnvironments.getsearchcustomer(this.getDataQuery, this.token).subscribe(response => {
        this.searchCustomerData = response;
        this.dataSource = new MatTableDataSource(this.searchCustomerData.data);
        this.dataSource.paginator = this.paginator;
        this.manualPage = 1
      })
    }

    else {
      this.dataSource = new MatTableDataSource(this.searchCustomerData.data);
      this.dataSource.paginator = this.paginator;
      this.manualPage = 0
    }
  }

  shareCheckedList1(item: any) {
    this.displayedColumns = item
    this.callapi()
  }

  shareCheckedList2(value: string, filter: string) {
    this.getDataQuery[filter] = value
  }

  public updateManualPage(index: number): void {
    this.manualPage = index - 1;
    this.paginator.pageIndex = index - 1;
    this.paginator.page.next({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length
    });
  }

  public clearManualPage(): void {
    this.manualPage = this.pageIndex + 1;
  }


  searchValue(val: any) {
    this.search = val
    this.callapi();
  }
}