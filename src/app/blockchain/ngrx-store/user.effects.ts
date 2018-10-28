// import { Injectable } from "@angular/core";
// import { Actions, Effect } from "@ngrx/effects";
// import { Observable } from "rxjs";
// // import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from "./app.module";
// // import { TodosService } from "./todos.service";

// @Injectable()
// export class TodosEffects {
//   constructor( private actions$ : Actions, 
//                private todosService : any ) {
//   }

//   @Effect() getTodos$ = this.actions$
//     .ofType('GET_TODOS')
//     .switchMap(action =>
//       this.todosService.getTodos()
//            .map(todos => ({type: 'GET_TODOS_SUCCESS', payload: todos}))
//            .catch(() => Observable.of({type: 'GET_TODOS_ERROR'})));
// }