import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {UserComponent} from "./components/user/user.component";

export const AppRoutes: Routes = [
  {
    path: "users",
    component: UserComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
