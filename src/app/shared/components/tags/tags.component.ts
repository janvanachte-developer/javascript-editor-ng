import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
// https://www.bennadel.com/blog/3538-on-the-irrational-demonization-of-two-way-data-binding-in-angular.htm
// This component supports both ONE-WAY and TWO-WAY data-binding. The TWO-WAY data-
// bindings is facilitated by the "tags" and "tagsChange" output events. These events
// allow for the "box of bananas" template syntax.
@Component({
    selector: "tags",
    //inputs: ["tags"],// see @Input
    outputs: [
    //     "tagAddEvents: add", // see @Output
    //    "tagRemoveEvents: remove", // see @Output
 //       "tagsChangeEvents: tagsChange"
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.css']
})
export class TagsComponent implements  OnChanges {

    public newTagName: string; // will have a 2 way binding as this is local

    //public tags: string[]; // see @Input
    //public tagsChangeEvents: EventEmitter<string[]>; / see @Output
    //public tagAddEvents: EventEmitter<string>; // see @Output
    //public tagRemoveEvents: EventEmitter<number>; // @Output

    // I initialize the tags component.
    @Input() tags: string[]
    @Output("tagsChange") tagsChangeEvents = new EventEmitter<string[]>(); // two way binding
    @Output("add") tagAddEvents = new EventEmitter<string>(); // one way binding
    @Output("remove") tagRemoveEvents = new EventEmitter<number>(); // one way binding

    constructor() {

        //this.tags = [];

        this.newTagName = "";
        //this.tagAddEvents = new EventEmitter();
        //this.tagRemoveEvents = new EventEmitter();
        //this.tagsChangeEvents = new EventEmitter();

    }

    // ---
    // PUBLIC METHODS.
    // ---

    // I get called after input bindings have been changed.
    public ngOnChanges( changes: SimpleChanges ) : void {

        // This component requires "tags" to exist. If it doesn't exist, the component
        // functionality will be fundamentally broken.
        if ( ! this.tags ) {

            throw( new Error( "Required input [tags] not provided." ) );

        }

    }


    // I process the new tag name.
    public processNewTag( event  ) : void {

        // Since this may be inside of a Form, we want to prevent the default behavior
        // of the key-event so as to not accidentally submit the parent form.
        event.preventDefault();

        if ( this.newTagName ) {

            // Emit new tag name for one-way data flow.
            this.tagAddEvents.emit( this.newTagName );

            // Emit NEW ARRAY with applied change for TWO-WAY data-binding.
            this.tagsChangeEvents.emit( this.tags.concat( this.newTagName ) );

            // Reset the form field.
            this.newTagName = "";

        }

    }


    // I process the removal of the tag at the given index.
    public removeTagAtIndex( index: number ) : void {

        // Emit new tag index for one-way data flow.
        this.tagRemoveEvents.emit( index );

        // Emit NEW ARRAY with applied change for TWO-WAY data-binding.
        this.tagsChangeEvents.emit([
            ...this.tags.slice( 0, index ),
            ...this.tags.slice( index + 1 )
        ]);

    }

}