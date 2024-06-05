import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'Frontend',
    },
    {
      _id: '2',
      name: 'React',
      category: 'Frontend',
    },
    {
      _id: '3',
      name: 'Node',
      category: 'Backend',
    },

  ];

  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
