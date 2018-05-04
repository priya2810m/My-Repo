import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatDialogRef} from '@angular/material/dialog';
import { Observable } from 'rxjs/Observable';
import { AddpageComponent } from './addpage/addpage.component';

@Injectable()
export class PopupService {

    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {
        let dialogRef: MatDialogRef<AddpageComponent>;
        dialogRef = this.dialog.open(AddpageComponent);
        return dialogRef.afterClosed();
    
    }
}
