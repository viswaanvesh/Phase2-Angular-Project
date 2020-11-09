import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Question } from "../quiz.model";

@Component({
  selector: "app-question-form",
  templateUrl: "./questions-form.component.html",
  styleUrls: ["./questions-form.component.scss"]
})
export class QuestionsFormComponent implements OnInit {
  @Input() question: Question;
  @Output() onChoiceMade = new EventEmitter<string>();

form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      choice: new FormControl()
    });

    this.form.valueChanges.subscribe(this.onChange);
  }

  onChange = () => {
    this.onChoiceMade.emit(this.form.value.choice);
  };
}
